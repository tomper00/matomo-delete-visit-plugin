//Add your Matomo API token here
var matomoAPIToken = "XXXXXXXXXXXXX";

var mutationObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        //React when visitorlog popup is displayed 
        if (mutation.target.id == "Piwik_Popover") {
            //Make sure we only react once	
            if (mutation.addedNodes.length == 4) {
                //Store info containing VisitID´s	
                var tooltips = document.querySelectorAll(".visitorLogTooltip");

                //Get siteid from URL
                var url = new URL(window.location.href);
                var idSite = url.searchParams.get("idSite");

                //Loop through tooltips and extract pure visitor ids. 
                for (i = 0; i < tooltips.length; i++) {
                    var title = tooltips[i].title;
                    if (title.includes("Visit ID")) {
                        var res1 = title.substring(title.search("Visit ID") + 10, title.length);
                        var res2 = res1.substring(0, res1.search("\n"));
                        //console.log(escape(res2));
                        var deletebutton = document.createElement("a");
                        deletebutton.href = "https://" + window.location.host + "/index.php?module=API&method=PrivacyManager.deleteDataSubjects&token_auth=" + matomoAPIToken + "&visits[0][idsite]=" + idSite + "&visits[0][idvisit]=" + res2;
                        //console.log(deletebutton.href);
                        deletebutton.title = "Delete visit: " + res2;
                        deletebutton.text = "Delete visit: " + res2;
                        deletebutton.target = "_blank";
                        deletebutton.style = "display: block; background: #d4291f; color: #fff; margin-top: 10px; text-align: center;";
                        tooltips[i].appendChild(deletebutton);
                    }
                }

            }

        }

    });
});
//Start listening to mutation objects but not on API requests
if (!window.location.href.includes("module=API")) {
    mutationObserver.observe(document.body, {
        attributes: false,
        characterData: true,
        childList: true,
        subtree: true,
        attributeOldValue: false,
        characterDataOldValue: false
   });
}