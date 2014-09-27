// Function to process JSON data into correct template based on dashboard level
function buildBars() {
    var data = $.getJSON("data.json", function(){
        console.log(data);
    });

    if (data != "") {
        var newJson = "{\"MyDataSet\":" + data + "}";
        var json = $.parseJSON(newJson);
        var ch = json.MyDataSet[0].channel;
        var s = json.MyDataSet[0].season;
        level = json.MyDataSet[0].level;
        $("#barData").html('');
        $("#dtlData").html('');
        addTemplate(level, json);
        setName();
    }
}

// Set up the HTML template to be used in jQuery templating for Bar Dashboards
function getBarTemplate() {
    var temp = "<tr>\
        <td>\
            <div id='${ID}' class='container pointer' onclick='window.open(\"#\", \"_blank\"); return false;'>\
                <div id='${ID}_barObj' class='barObj shadow rounded-corners'>\
                    <div id='${group}_name' class='textCenter'>${group} - ${stage2per} %</div>\
                    <table id='${ID}_tbl'>\
                        <tr>\
                            <td></td>\
                            <td><span class='left'>${stage1}</span><span class='right'>${stage2}</span></td>\
                            <td></td>\
                        </tr>\
                        <tr>\
                            <td style='width: 5%;'><p class='vertAlign'>0%</p></td>\
                            <td style='width: 90%;'>\
                                <div class='barHolder'>\
                                    <div class='pos pointer bar'>\
                                        <div class='left vertAlign pointer devColor' style='width:${stage1per}%; height:30px;'></div>\
                                        <div class='right vertAlign pointer prodColor' style='width:${stage2per}%;  height:30px;'></div>\
                                    </div>\
                                </div>\
                                <div class='markers'></div>\
                            </td>\
                            <td style='width: 5%;'><p class='vertAlign'>100%</p></td>\
                        </tr>\
                    </table>\
                </div>\
            </div>\
        </td>\
        <td style='padding-left: 25px;'>\
            <div class='container'>\
                <div class='dataTable shadow rounded-corners vertAlign'>\
                    <table style='width: 100%; background-color: black; margin-top: 12px;'>\
			            <thead>\
				            <tr>\
					            <td class='cellPad tdWhite'>Active Styles</td>\
					            <td class='cellPad devColor'>${stage1}</td>\
					            <td class='cellPad prodColor'>${stage2}</td>\
				            </tr>\
			            </thead>\
			            <tbody>\
				            <tr>\
					            <td class='cellPad tdWhite'>${ttl}</td>\
					            <td class='cellPad tdWhite'>${stage1count}</td>\
					            <td class='cellPad tdWhite'>${stage2count}</td>\
                            </tr>\
			            </tbody>\
		            </table>\
                </div>\
            </div>\
        </td>\
    </tr>";
    return temp;
}

// Set up the HTML template to be used in jQuery templating for Details Dashboards
function getDetailTemplate() {
    var temp = "<tr>\
        <td class=${stageID}>\
            ${Stage}\
        </td>\
        <td>\
            <a href='${path}' target='_blank'>${style}</a>\
        </td>\
        <td>\
            ${description}\
        </td>\
    </tr>";
    return temp;
}