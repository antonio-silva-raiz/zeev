$(document).ready(function () {
    const APP = new DadosAplicativo();
    APP.init();
    console.log(APP.REQ, APP.INST, APP.SERV);
});

class DadosAplicativo {
    constructor() {
        this.REQ = null;
        this.INST = null;
        this.SERV = null;
    }

    init() {
        const inpdadosDoAplicativo = $('#inpdadosDoAplicativo').val();
        const dataArray = inpdadosDoAplicativo.split(',');

        this.REQ = new Requisicao(dataArray);
        this.INST = new Instancia(dataArray);
        this.SERV = new Servico(dataArray);

        // Aqui você pode utilizar os dados, por exemplo:
        console.log(this.REQ, this.INST, this.SERV);
    }
}

class Requisicao {
    constructor(dataArray) {
        this.Id = dataArray[0];
        this.Document = dataArray[1];
        this.Email = dataArray[2];
        this.Username = dataArray[3];
        this.Identification = dataArray[4];
        this.Name = dataArray[5];
        this.Celular = dataArray[6];
        this.Token = dataArray[7];
        this.District = dataArray[8];
        this.City = dataArray[9];
        this.State = dataArray[10];
        this.Country = dataArray[11];
        this.Zip = dataArray[12];
        this.Address = dataArray[13];
    }
}

class Instancia {
    constructor(dataArray) {
        this.FlowId = dataArray[14];
        this.Id = dataArray[15];
        this.ConfirmationCode = dataArray[16];
        this.StartDate = dataArray[17];
        this.FlowName = dataArray[18];
        this.InstanceTaskId = dataArray[19];
        this.Xml = dataArray[20];
        this.LinkReport = dataArray[21];
    }
}

class Servico {
    constructor(dataArray) {
        this.Id = dataArray[22];
        this.Name = dataArray[23];
        this.Description = dataArray[24];
        this.ExternalUrl = dataArray[25];
        this.UID = dataArray[26];
    }
}
