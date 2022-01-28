const fetch = require("node-fetch");

// write to JSON file
async function readAirtable(url) {
  console.log(`Begin read ${url}`);
  const pageSize = 100;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.AIRTABLE_AUTHORIZATION}`,
  };

  async function readAirtablePage(offset = "") {
    const newUrl = `${url}&pageSize=${pageSize}&offset=${offset}`;
    console.log(`New URL ${newUrl}`);
    const response = await fetch(newUrl, {
      method: "get",
      headers,
    });
    if (!response.ok) {
      console.log("read error");
      console.log(response);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseJson = await response.json();
    console.log(`Records in batch ${responseJson.records.length}`);
    let records = responseJson.records;
    if (responseJson.offset) {
      console.log(`Read response offset ${responseJson.offset}`);
      const newPage = await readAirtablePage(responseJson.offset);
      records = [...records, ...newPage];
    } else {
      console.log(`Read response ended`);
    }
    console.log(`Total Records ${records.length}`);
    return records;
  }

  const responses = await readAirtablePage();
  console.log(`End read ${url}`);
  return {
    url: url,
    response: responses,
  };
}

module.exports = readAirtable;
