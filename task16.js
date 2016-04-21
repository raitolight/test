/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */

var aqiData = {};


/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	
	var city = document.getElementById("aqi-city-input").value.trim();
	var value = document.getElementById("aqi-value-input").value.trim();
	
	if(!city.match(/^[\u4e00-\u9fa5a-zA-Z]+$/)){
		alert("城市名必须为中英文字符！");
		return;
	}
	
	if(!value.match(/^[0-9]+$/)){
		alert("空气质量指数必须为整数！");
		return;
	}
	
	aqiData[city] = value;
	
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	
	var table = document.getElementById("aqi-table");
	var trs = table.getElementsByTagName("tr");    
    for(var i = trs.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }
		
    var item="";
    
	for(var city in aqiData){
			
		item += '\n';
		item += '<tr>';
		item += 	'<td>';
		item += 	city;
		item += 	'</td>';
		item += 	'<td>';
		item += 	aqiData[city];
		item += 	'</td>';
		item += 	'<td>';
		item += 		'<button class="del-btn" onclick="delBtnHandle(&quot;'+ city +'&quot;);">';
		item += 		'删除';
		item += 		'</button>';
		item += 	'</td>';
		item += '</tr>';
		 
	}
	
	table.innerHTML += item;

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
  // do sth.
	delete aqiData[city];
	renderAqiList();
}

function init() {
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
	document.getElementById("add-btn").onclick = addBtnHandle;
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  //已在生成按钮时自动绑定事件用于触发delBtnHandle函数
}

init();
