const data = [
  {
    id: 'project-1',
    title: 'Tonic',
    canopy: 'CANOPY',
    card_list: ['html', 'css', 'javascript'],
    image: './assets/images/1.png',
    about:
      'A daily selection of privately personalized reads; no accounts or sign-ups required..',
  },
  {
    id: 'project-2',
    title: 'Multi-Post-Stories',
    canopy: 'CANOPY',
    card_list: ['html', 'css', 'javascript'],
    image: './assets/images/2.png',
    about:
      'A daily selection of privately personalized reads; no accounts or sign-ups required..',
  },
  {
    id: 'project-3',
    title: 'Facebook 360',
    canopy: 'CANOPY',
    card_list: ['html', 'css', 'javascript'],
    image: './assets/images/3.png',
    about:
      'A daily selection of privately personalized reads; no accounts or sign-ups required..',
  },
  {
    id: 'project-4',
    title: 'Uber Navigation',
    canopy: 'CANOPY',
    card_list: ['html', 'css', 'javascript'],
    image: './assets/images/4.png',
    about:
      'A daily selection of privately personalized reads; no accounts or sign-ups required..',
  },
];

const myHtmlArticle = (myObj) => {
  const articleTemplate = `
  <div class="card-works">
    <img
      src=${myObj.image}
      alt="Snapshoot Portfolio"
    />
    <div class="card-details">
      <h2 class="primary-text">Tonic</h2>
      <div class="frame">
        <ul class="frame-item">
          <li>${myObj.canopy}</li>
          <li>Back End Dev</li>
          <li>2015</li>
        </ul>
      </div>
      <p class="paragraph-details">
        ${myObj.about}
      </p>
      <ul class="categories">
        ${myObj.card_list.map((elem) => `<li>${elem}</li>`).join('')}
      </ul>
      <button type="button" class="btn cta-btn">See Project</button>
    </div>
  </div>
  `;

  return articleTemplate;
};

const cardHolder = document.querySelector('#portfolio');
data.forEach((elem) => {
  cardHolder.insertAdjacentHTML('beforeend', myHtmlArticle(elem));
});

// function openPopup() {
//   document.querySelector(
//     '#popup-menu'
//   ).innerHTML += `<div class="popup-container">
//   <div class="title-container">
//     <h2 class="primary-text">Title</h2>
//     <div class="close-popup">
//     <i class="fa-solid fa-x" id="close-popup-id" onClick="closePopup"></i>
//     </div>
//     </div>
//   <ul class="frame-item">
//     <li>CANOPY</li>
//     <li>Back End Dev</li>
//     <li>2015</li>
//   </ul>
//   <div class="popup-img">
//     <img src="./assets/images/1.png" alt="Portfolio image" />
//   </div>
//   <div class="popup-details">
//     <p class="paragraph-details">
//       Lorem Ipsum is simply dummy text of the printing and typesetting
//       industry. Lorem Ipsum has been the industry's standard dummy text
//       ever since the 1500s, when an unknown printer took a galley of type
//       and scrambled it 1960s with the releaLorem Ipsum is simply dummy
//       text of the printing and typesetting industry. Lorem Ipsum has been
//       the industry's standard dummy text ever since the 1500s, when an
//       unknown printer took a galley of type and scrambled it 1960s with
//       the releorem Ipsum is simply dummy text of the printing and
//       typesetting industry. Lorem Ipsum han printer took a galley of type
//       and scrambled it 1960s with the releawn printer took a galley of
//       type and scrambled it 1960s with the releaLorem Ipsum is simply
//       dummy text of the printing and typesetting industry. Lorem Ipsum has
//       been the industry's standard dummy text ever since the 1500s, when
//       an unknown printer took a galley of type and scrambled it 1960s with
//       the relea
//     </p>
//     <div class="techlist">
//       <ul class="categories">
//         <li>html</li>
//         <li>css</li>
//         <li>Javascript</li>
//         <br />
//         <li>github</li>
//         <li>ruby</li>
//         <li>bootstrap</li>
//       </ul>
//       <div class="pop-button">
//         <button type="submit" class="see-project pop-button">
//           See Live
//           <i class="fa-solid fa-arrow-right-long"></i>
//         </button>

//         <button type="submit" class="see-project pop-button">
//           See Source
//           <i class="fa-brands fa-github"></i>
//         </button>
//       </div>
//     </div>
//   </div>
// </div>`;
//   document.querySelector('.popup-section').style.display = 'block';
// }

// function closePopup() {
//   document.querySelector('.popup-section').style.display = 'none';
// }
