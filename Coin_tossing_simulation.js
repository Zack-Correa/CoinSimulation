function func(Chart) {
    if (!Chart) {
        throw new Error('The module ChartJS is required.');
    } else {

        var rounds = document.getElementById('nCoins').value;
        var nCoins = document.getElementById('nRounds').value;
        var chance = 0.5
        var normalDistribution = {}


        function coinTossing(rounds, coins) {
            for (var k = 0; k < rounds; k++) {
                var head = 0

                for (var j = 0; j < coins; j++) {
                    if (Math.random() < chance) {
                        head++;
                    }
                }

                if (normalDistribution[head] === undefined) {
                    normalDistribution[head] = 1
                } else {
                    normalDistribution[head] += 1
                }
            }
            return normalDistribution;
        }

        var a = coinTossing(rounds, nCoins);

        document.getElementById("chartDiv").innerHTML = '&nbsp;';
        document.getElementById("chartDiv").innerHTML = '<canvas id="mainChart"></canvas>';

        var ctx = document.getElementById('mainChart')
        var mChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(a),
                datasets: [{
                    label: 'test',
                    backgroundColor: "#48C9B0",
                    data: Object.values(a),
                    borderWidth: 0
                }]
            }
        });
        mChart.update()
    }
    console.log(normalDistribution)
    console.log(normalDistribution.length)
}