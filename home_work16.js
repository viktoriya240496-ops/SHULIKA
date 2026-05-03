// ТЕСТИ ДО ЗАПИТУ Is Valid ISBN10 Number

// 1. Status code
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// 2. Response не порожній
pm.test("Response is not empty", function () {
    pm.expect(pm.response.text().length).to.be.above(0);
});

// 3. SOAP Envelope
pm.test("Contains SOAP Envelope", function () {
    pm.expect(pm.response.text()).to.include("Envelope");
});

// 4. SOAP Body
pm.test("Contains SOAP Body", function () {
    pm.expect(pm.response.text()).to.include("Body");
});

// 5. Є тег результату ISBN10
pm.test("Contains ISBN10 result tag", function () {
    pm.expect(pm.response.text()).to.include("IsValidISBN10Result");
});

// 6. Результат true/false
pm.test("Result is true or false", function () {
    pm.expect(pm.response.text()).to.match(/true|false/);
});

// 7. Content-Type XML
pm.test("Content-Type is XML", function () {
    pm.expect(pm.response.headers.get("Content-Type")).to.include("xml");
});

// 8. Є header Date
pm.test("Date header exists", function () {
    pm.response.headers.has("Date");
});

// 9. Response time < 2000ms
pm.test("Response time is less than 2s", function () {
    pm.expect(pm.response.responseTime).to.be.below(2000);
});

// 10. Є Content-Length
pm.test("Content-Length exists", function () {
    pm.response.headers.has("Content-Length");
});


// ТЕСТИ ДО ЗАПИТУ Is Valid ISBN13 Number

// 1. Status code
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// 2. Response не порожній
pm.test("Response is not empty", function () {
    pm.expect(pm.response.text().length).to.be.above(0);
});

// 3. SOAP Envelope присутній
pm.test("Contains SOAP Envelope", function () {
    pm.expect(pm.response.text()).to.include("Envelope");
});

// 4. SOAP Body присутній
pm.test("Contains SOAP Body", function () {
    pm.expect(pm.response.text()).to.include("Body");
});

// 5. Є тег результату ISBN13
pm.test("Contains ISBN13 result tag", function () {
    pm.expect(pm.response.text()).to.include("IsValidISBN13Result");
});

// 6. Результат true/false
pm.test("Result is true or false", function () {
    pm.expect(pm.response.text()).to.match(/true|false/);
});

// 7. Content-Type XML
pm.test("Content-Type is XML", function () {
    pm.expect(pm.response.headers.get("Content-Type")).to.include("xml");
});

// 8. Є header Server
pm.test("Server header exists", function () {
    pm.response.headers.has("Server");
});

// 9. Response time < 2000ms
pm.test("Response time is less than 2s", function () {
    pm.expect(pm.response.responseTime).to.be.below(2000);
});

// 10. Немає 500 помилки
pm.test("No server error", function () {
    pm.expect(pm.response.code).to.not.equal(500);
});
