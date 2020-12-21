function Magatzem(num) {

    this.numEstants = num;
    this.estants = new Array();

    this.inicialitza = inicialitza;

    function inicialitza() {
        for (var i = 0; i < this.numEstants; i++) {
            this.estants[i] = new Estant("Shelf " + i);
        }
    }


    this.afegirPaquet = afegirPaquet;

    function afegirPaquet(p, pos) {

        var info = "<p>Adding ...</p>";
        document.getElementById("log").innerHTML += info;
        this.estants[pos].afegirPaquet(p);
        this.mostraTaula();
    }

    this.recollirPaquet = recollirPaquet;

    function recollirPaquet(numEstant) {
        var info = "<p>Deleting ...</p>";
        document.getElementById("log").innerHTML += info;
        var p = this.estants[numEstant].paquet;
        this.estants[numEstant].recollirPaquet();
        this.mostraTaula();
        return p;
    }

    this.getNumLliures = getNumLliures;

    function getNumLliures() {
        var n = 0;
        for (var i = 0; i < this.estants.length; i++) {
            if (this.estants[i].paquet == null) {
                n++;
            }
        }
        return n;
    }

    this.getNumOcupats = getNumOcupats;

    function getNumOcupats() {
        return this.numEstants - this.getNumLliures();
    }

    this.mostraTaula = mostraTaula;

    function mostraTaula() {
        var txt = "<h2 class='text-center'> Storage (" + this.getNumLliures() + ")</h2>";
        txt += "<table class='table table-bordered'><thead class='thead-dark'><tr>";
        for (var i = 0; i < this.numEstants; i++) {
            txt += "<th width='100px'>" + i + "</th>";
        }
        txt += "</tr></thead><tbody>";
        for (var i = 0; i < this.numEstants; i++) {
            var e = this.estants[i];
            txt += "<td width='100px'>" + e.printInfo() + "</td>";
        }
        txt += "</tr></tbody></table>";
        document.getElementById("content").innerHTML = txt;
    }

    this.calculaPreus = calculaPreus;

    function calculaPreus() {
        var info = "<p>Calculate prices ...</p>";
        document.getElementById("log").innerHTML += info;
        this.estants.forEach(calculaPreuPaquet);
    }

    function calculaPreuPaquet(item, index, array) {
        if (item.paquet != null) {
            var pvp = parseFloat(item.paquet.pes) * 0.75;
            var info = "<p>Price " + index + " és " + pvp + "€.</p>";
            document.getElementById("log").innerHTML += info;
        }
    }

    this.ordenaPes = ordenaPes;

    function ordenaPes() {
        var info = "<p>Ordering ...</p>";
        document.getElementById("log").innerHTML += info;
        this.estants.sort(function(a, b) {
            var pesA = (a.paquet != null) ? a.paquet.pes : 0;
            var pesB = (b.paquet != null) ? b.paquet.pes : 0;
            return pesB - pesA;
        });
    }

    this.paquetMesVell = paquetMesVell;

    function paquetMesVell() {
        var info = "<p>Searching oldest ...</p>";
        document.getElementById("log").innerHTML += info;
        var minTemps = new Date();
        var pMesVell = null;
        for (var i = 0; i < this.numEstants; i++) {
            if (this.estants[i].paquet != null) {
                var p = this.estants[i].paquet;
                if (this.estants[i].entrada < minTemps) {
                    pMesVell = p;
                    minTemps = p.entrada;
                }
            }
        }
        return pMesVell;
    }

}