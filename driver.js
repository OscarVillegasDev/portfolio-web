
import { getTranslation } from './i18n.js';

export function startTour() {
  const driver = window.driver.js.driver;

  const driverObj = driver({
    showProgress: true,
    allowClose: false,
    steps: [
      { popover: { title: getTranslation('tour_step1_title'), description: getTranslation('tour_step1_desc') } },
      { element: '#send-button', popover: { title: getTranslation('tour_step2_title'), description: getTranslation('tour_step2_desc'), side: "bottom", align: 'start' }},
      { element: '.response-section', popover: { title: getTranslation('tour_step3_title'), description: getTranslation('tour_step3_desc'), side: "top", align: 'start' }},
      { popover: { title: getTranslation('tour_step4_title'), description: `<img src='./bobGif.gif' style='height: 202.5px; width: 270px;' /><span style='font-size: 15px; display: block; margin-top: 10px; text-align: center;'>${getTranslation('tour_step4_desc')}</span>` } }
    ]
  });

  driverObj.drive();
}