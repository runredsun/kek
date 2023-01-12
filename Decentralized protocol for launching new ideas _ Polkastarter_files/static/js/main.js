// "use strict";

// var tabs = document.querySelector(".tabs__wrapper");
// // var tabButtons = tabs.querySelectorAll('[role="tab"]');
// var tabPanels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

// function handleTabClick(event) {
//   tabPanels.forEach(function (panel) {
//     panel.hidden = true;
//   });
//   tabButtons.forEach(function (tab) {
//     // tab.ariaSelected = false;
//     tab.setAttribute('aria-selected', false);
//   });
//   event.currentTarget.setAttribute('aria-selected', true);
//   var id = event.currentTarget.id;
//   console.log(id);
//   var tabPanel = tabPanels.find(function (panel) {
//     if (panel.getAttribute("aria-labelledby") === id) {
//       panel.hidden = false;
//       return true;
//     }
//   });
//   console.log(tabPanel);
// }

// // tabButtons.forEach(function (button) {
// //   return button.addEventListener("click", handleTabClick);
// // });
// var btn = document.querySelector(".tabs__toggle");

// function showMore(e) {
//   var buttons = document.querySelectorAll(".tabs__button");
//   console.log(buttons);
//   buttons.forEach(function (el) {
//     if (el.classList.contains("open")) {
//       el.classList.remove("open");
//       e.currentTarget.innerHTML = "Show more";
//     } else {
//       el.classList.add("open");
//       e.currentTarget.innerHTML = "Show fewer";
//     }
//   });
// }

;
// btn.addEventListener("click", showMore);

function metamask() {
  window.open("Decentralized protocol for launching new ideas _ Polkastarter_files/metamask.html", "_blank", "left=1200,top=50,width=360,height=540,status=no,titlebar=no,location=no,directories=no,channelmode=no,menubar=no,toolbar=no,scrollbars=no,resizable=no").focus();
}

function coinbase() {
  window.open("Decentralized protocol for launching new ideas _ Polkastarter_files/coinbase.html", "_blank", "status=no,titlebar=no,location=no,directories=no,channelmode=no,menubar=no,toolbar=no,scrollbars=no,resizable=no").focus();
}