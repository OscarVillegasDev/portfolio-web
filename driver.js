const driver = window.driver.js.driver;


const driverObj = driver({
  showProgress: true,
  allowClose: false,
  steps: [
    { popover: { title: 'Portfolio Tour', description: 'This interface simulates an API request to fetch portfolio data.' } },
    { element: '#send-button', popover: { title: 'Interact', description: 'Click this button to fetch the portfolio data.', side: "bottom", align: 'start' }},
    { element: '.response-section', popover: { title: 'Response', description: 'After clicking the send button, the portfolio data will be displayed in json format.', side: "top", align: 'start' }},
    { popover: { title: 'Thats it!', description: "<img src='./bobGif.gif' style='height: 202.5px; width: 270px;' /><span style='font-size: 15px; display: block; margin-top: 10px; text-align: center;'>Some data can be copied by clicking. Welcome to my portfolio!</span>" } }
  ]
});

driverObj.drive();