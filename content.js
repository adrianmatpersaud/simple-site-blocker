let sites = ["reddit",
	     "youtube",
	     "bbc",
	     "facebook",
	     "aljazeera",
	     "instagram"]
             .map(domain => "www." + domain + ".com");

let bad_url = window.location.hostname;

let blocked = (sites.map(url => url.includes(bad_url)))
                    .reduce((acc, cur) => {return acc || cur;}, false);

if(blocked) window.location.href = "https://media.tenor.com/EIOYrYnPOq8AAAAd/seal-spin.gif";
