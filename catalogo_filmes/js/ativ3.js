const getData = async () => {
	let resp = await fetch("https://rafaelescalfoni.github.io/desenv_web/filmes.json");
	let json = await resp.json();
	return json;
};
getData().then(data => inicializacao(data));
const inicializacao = json => {
	json.forEach(filme => {
	let div = document.createElement("div");
		let horizontal = document.createElement("div");
		horizontal.className = "horizontal";
		let thumbnail = document.createElement("img");
		thumbnail.className = "thumbnail";
		thumbnail.src = filme.figura;
		horizontal.append(thumbnail);
		let inf = document.createElement("div");
		inf.className = "info";
		let title = document.createElement("h2");
		title.className = "titulo";
		title.innerHTML = filme.titulo;
		inf.append(title);
		let gener = document.createElement("p");
		gener.innerHTML = "<b>Generos:</b> " + filme.generos;
		inf.append(gener);
		let elenc = document.createElement("p");
		elenc.innerHTML = "<b>Elenco:</b> " + filme.elenco;
		inf.append(elenc);
		horizontal.append(inf);
		let idd = document.createElement("span");
		let idddiv = document.createElement("div");
		idddiv.className = "idadediv";
		idd.className = "idade";
		idd.innerHTML = filme.classificacao == 0 ? "L" : filme.classificacao;
		idd.style.color = "#fff";
		idddiv.style.backgroundColor =
			filme.classificacao == 0
				? "#0e9246"
				: filme.classificacao == 10
				? "#117cc0"
				: filme.classificacao == 12
				? "#f8c313"
				: filme.classificacao == 14
				? "#e67823"
				: filme.classificacao == 16
				? "#d72927"
				: "#1c1914";
		idddiv.append(idd);
		horizontal.append(idddiv);
		let x = 0;
		let starrating = 0;
		filme.opinioes.forEach(opiniao => {
			x++;
			starrating += opiniao.rating;
		});
		starrating /= x;
		starrating = Math.round(starrating);
		let rat = document.createElement("div");
		rat.className = "rating";
		let estrela = document.createElement("img");
		estrela.src = "star.png";
		for (let i = 1; i <= 5; i++) {
			let currstar = estrela.cloneNode();
			if (i <= starrating) currstar.className = "fullstar";
			rat.append(currstar);
		}
		horizontal.append(rat);
		div.append(horizontal);
		let descr = document.createElement("div");
		descr.className = "descricao";
		descr.innerHTML = filme.resumo;
		div.append(descr);
		let same = document.createElement("div");
		same.className = "semelhantes";
		let sametitle = document.createElement("h3");
		sametitle.innerHTML =
			filme.titulosSemelhantes.length != 0 ? "Titulos semelhantes" : "";
		same.append(sametitle);
		let samediv = document.createElement("div");
		filme.titulosSemelhantes.forEach(numero => {
			let tinythumb = document.createElement("img");
			tinythumb.src = json[numero - 1].figura;
			samediv.append(tinythumb);
		});
		same.append(samediv);
		horizontal.append(same);
		document.querySelector(".filmes").append(div);
	});
};
