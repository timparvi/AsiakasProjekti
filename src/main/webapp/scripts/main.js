function haeAsiakkaat() {
	let url = "Asiakkaat";
	let requestOptions = {
			method: "GET",
			headers: {"Content-Type": "application/x-www-form-urlencoded"}
	};
	fetch(url, requestOptions)
	.then(response => response.json())
	.then(response => printItems(response))
	.catch(errorText => console.error("Fetch failed: " + errorText));
}
function printItems(respObjList) {
    let htmlStr = "";
    for (let item of respObjList) {
        htmlStr += "<tr id='rivi_" + item.asiakas_id + "'>";
        htmlStr += "<td>" + item.etunimi + "</td>";
        htmlStr += "<td>" + item.sukunimi + "</td>";
        htmlStr += "<td>" + item.puhelin + "</td>";
        htmlStr += "<td>" + item.sposti + "</td>";
        htmlStr += "</tr>";
    }
    document.getElementById("tbody").innerHTML = htmlStr;
}

function etsiAsiakas() {
    let input, haku, t, tr, td, i, teksti;
    input = document.getElementById("searchInput");
    haku = input.value.toUpperCase();
    taulukko = document.getElementById("listaus");
    tr = taulukko.getElementsByTagName("tr");

    // Haku loop + piilotus
    for (i = 0; i < tr.length; i++) {
        let td_etunimi = tr[i].getElementsByTagName("td")[0];
        let td_sukunimi = tr[i].getElementsByTagName("td")[1];
        if (td_etunimi || td_sukunimi) {
            let teksti_etunimi = td_etunimi.textContent;
            let teksti_sukunimi = td_sukunimi.textContent;
            let teksti = teksti_etunimi + " " + teksti_sukunimi;
            if (teksti.toUpperCase().indexOf(haku) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}