const input = document.querySelector("#phone");
window.intlTelInput(input, {
  initialCountry: "Ru",
  geoIpLookup: callback => {
    fetch("https://ipapi.co/json")
      .then(res => res.json())
      .then(data => callback(data.country_code))
      .catch(() => callback("us"));
  },
  utilsScript: "/intl-tel-input/js/utils.js?1695806485509" // just for formatting/placeholders etc
});

const maskOptions = {
  mask: '(000)000-00-00'
};
const mask = IMask(input, maskOptions);