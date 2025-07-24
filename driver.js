const driver = window.driver.js.driver;


const driverObj = driver({
  showProgress: true,
  steps: [
    { element: '.postman-container', popover: { title: 'Portfolio Tour', description: 'This interface simulates an API request to fetch portfolio data.', side: "left", align: 'start' }},
    { element: '#send-button', popover: { title: 'Interact', description: 'Click this button to fetch the portfolio data.', side: "bottom", align: 'start' }},
    { element: '.response-section', popover: { title: 'Response', description: 'After clicking the send button, the portfolio data will be displayed in json format.', side: "bottom", align: 'start' }},
    { popover: { title: 'Thats it!', description: 'Some data can be copied by clicking. Welcome to my portfolio!' } }
  ]
});

driverObj.drive();