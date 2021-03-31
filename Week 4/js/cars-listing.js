function init() {

    console.log({ fleetSalesObject });

    setUpCascadingList()
}

function setUpCascadingList() {

    var selectMf = document.getElementById("selectMf");
    var selectModel = document.getElementById("selectModel")
    var selectVersion = document.getElementById("selectVersion")

    for (let mf in fleetSalesObject) {

        // selectMf.options[selectMf.options.length] = new Option(mf,mf);

        selectMf.options.add(new Option(mf, mf));
    }

    selectMf.onchange = function () {

        selectModel.length = 1;

        for (let model in fleetSalesObject[this.value]) {

            selectModel.options.add(new Option(model, model));
        }


    }

    selectModel.onchange = function () {

        selectVersion.length = 1;
        let versions = fleetSalesObject[selectMf.value][this.value];

        // if I used 'in' I wold get index value
        // https://stackoverflow.com/questions/29285897/what-is-the-difference-between-for-in-and-for-of-statements
        for(let v of versions) {

            selectVersion.options.add(new Option(v, v));
        }


    }




}