function exist(elem) {
  (elem.length>0) ? true : false;
}
function randd(min, max) {
  return Math.floor(arguments.length > 1 ? (max - min + 1) * Math.random() + min : (min + 1) * Math.random());
};
// перемешивание
function shuffle(o){
    if (o.length == undefined || typeof o != 'object')
      return [0];
    for(var j, x, k = o.length; k; j = Math.floor(Math.random() * k), x = o[--k], o[k] = o[j], o[j] = x);
    return o;
};

function makeComboBox(src) {
	var ret = '';
	var ARR_DOWN = '<i class="fa fa-arrow-down"></i>';
	var ARR_UP = '<i class="fa fa-arrow-up"></i>';
	var arrow="<div class='combo_box_arrow'>"+ARR_UP+"</div>";
	for (var i in src.l) {
		//console.dir(src.l[race]);
    var race = src.l[i];
    if (src.l[i].list.length < 2) {
      var sbr = race.list[0];
      ret+="<label for='ch_"+sbr.name+"' title='"+sbr.tooltip+"'><input type='checkbox' value='"+race.name+" "+sbr.name+"' id='ch_"+sbr.name+"'>"+sbr.title+"</label>";
    } else {
      ret+= "<label for='ch_"+race.name+"' title='"+sbr.tooltip+"'><input type='checkbox' value='"+race.name+"' id='ch_"+race.name+"' data-root='"+race.name+"'>"+race.title+"</label>";
      for(var j in race.list) {
        var sbr = race.list[j];
        ret+= "<label for='ch_"+sbr.name+"' title='"+sbr.tooltip+"'><input type='checkbox' value='"+sbr.name+"' id='ch_"+sbr.name+"' data-parent='"+race.name+"'>"+sbr.title+"</label>";
      }
    }

	}
	ret = "<div id='selector' class='combo_box' data-text='Выберите список'><div class='combo_box_title'>Выберите список</div><div class='combo_box_content'>"+ret+"</div>"+arrow+"</div>";
	//$("body").html(ret);
	return ret;
}

var items = {
	"l": [
		{
		"name": "trinkets",
		"title": "Вещички",
		"list": [
				{
					"name": "trinkets",
					"title": "Безделушки",
					"tooltip": "DND 5, Players Hand Book, 100 безделушек",
					"schemes": [
						"list"
					],
					"src": [
						{
							"name": "list",
							"type": "list",
							"l": "Мумифицированная рука гоблина; Кусочек кристалла, слабо светящийся в лунном свете; Золотая монета, отчеканенная в неизвестной стране; Дневник, написанный на неизвестном вам языке; Латунное кольцо, которое не темнеет со временем; Старая стеклянная шахматная фигура; Пара игральных костей, у обеих вместо шестёрок нарисованы черепа; Небольшой идол, изображающий страшное чудовище, насылающий кошмары, когда вы спите рядом с ним; Верёвочное ожерелье, на котором висят четыре мумифицированных эльфийских пальца; Квитанция для получения посылки в неизвестном вам королевстве; 30-граммовый кусочек неизвестного материала; Маленькая тряпичная кукла, утыканная иголками; Зуб неизвестного зверя; Огромная чешуйка, возможно, драконья; Ярко-зелёное перо; Старая гадальная карта с лицом, похожим на ваше; Стеклянная сфера, заполненная дымом; Полукилограммовое яйцо с ярко-красной скорлупой; Курительная трубка, из которой вылетают пузыри; Стеклянный графин с мутной жидкостью, в которой плавает странный кусочек мяса; Крошечная музыкальная шкатулка гномьей работы, наигрывающая мелодию, напоминающую вам о детстве; Маленькая деревянная статуэтка нарядного полурослика; Латунная сфера, покрытая странными рунами; Разноцветный каменный диск; Крошечный серебряный ворон; Сумка, в которой лежат 47 человеческих зубов. Один с кариесом; Кусок обсидиана, всегда тёплый на ощупь; Коготь дракона, подвешенный на простом кожаном шнурке; Пара старых носков; Чистая книга, на страницах которой не получается писать ни чернилами, ни мелом, ни углём, и никакими другими обычными средствами; Серебряный значок в форме пятиконечной звезды; Нож, принадлежавший родственнику; Стеклянный флакон с обрезками ногтей; Прямоугольное металлическое устройство с двумя крошечными металлическими колпачками на одной стороне. Если его намочить, оно сыпет искры; Белые перчатки с блёстками; Одеяние с сотней крохотных карманов; Маленький каменный кирпич, который ничего не весит; Крохотный набросок портрета гоблина; Пустой флакон, пахнущий духами при открытии; Драгоценный камень, который всем кроме вас кажется куском угля; Кусок старого знамени; Знак различия древнего легиона; Крохотный серебряный колокольчик без язычка; Механическая канарейка в гномьей лампе; Крохотный сундук, вырезанный так, что кажется, что у него невероятно глубокое дно; Мёртвый спрайт в чистой стеклянной бутылке; Запаянная металлическая банка, в которой, судя по звукам, находится жидкость, песок, пауки или битое стекло (на ваш выбор); Стеклянная сфера с водой, в которой плавает механическая золотая рыбка; Серебряная ложка с выгравированной на ручке буквой «М»; Свисток из дерева золотого цвета; Мёртвый скарабей размером с ладонь; Два игрушечных солдатика, один без головы; Небольшая коробка с пуговицами разного размера; Свеча, которая никак не загорается; Крохотная клетка без дверцы; Старый ключ; Не поддающаяся расшифровке карта сокровищ; Рукоятка от сломанного меча; Кроличья лапка; Стеклянный глаз; Камея с резным портретом ужасного лица; Серебряный череп размером с монету; Алебастровая маска; Пирамидка клейкого чёрного дурно пахнущего благовония; Ночной колпак, дарующий приятные сны; Один костяной калтроп; Золотая оправа монокля без линзы; Кубик с длиной ребра 2 сантиметра, все стороны раскрашены в разные цвета; Хрустальная дверная ручка; Пакетик розовой пыли; Два листа пергамента с фрагментом нот прекрасной песни; Серебряная серьга в виде слезинки, сделанная из настоящей слезинки; Яичная скорлупа, разрисованная с жуткими подробностями сценами человеческих мук; Веер, на котором в раскрытом состоянии видно спящую кошку; Набор костяных трубочек; Четырёхлистный клевер, засушенный в книге о манерах и этикете; Лист пергамента, на котором изображена сложная механическая конструкция; Разукрашенные ножны, под которые вы никак не можете найти подходящий клинок; Приглашение на вечеринку, на которой произошло убийство; Бронзовая пентаграмма с выгравированной в центре крысиной головой; Фиолетовый носовой платок с вышитым именем великого архимага; Половинка плана храма, замка или другого строения; Кусочек сложенной ткани, который, если развернуть, превращается в модную кепку; Квитанция о депозите в банке далёкого города; Дневник, в котором не хватает семь страниц; Пустая серебряная табакерка с надписью на поверхности «грёзы»; Железный святой символ неизвестного божества; Книга о восхождении и свержении легендарного героя, в которой нет последней главы; Сосуд с драконьей кровью; Древняя эльфийская стрела; Иголка, которая никогда не гнётся; Красивая дварфская брошь; Пустая бутылка из-под вина с небольшой наклейкой «Винокурня Винного Волшебника, Красное драконье, 331422-В»; Плитка мозаики с разноцветной глазированной поверхностью; Окаменевшая мышь; Чёрный пиратский флаг с черепом и костями дракона; Крохотный металлический краб или паук, который двигается, когда на него не смотрят; Стеклянная бутылка сала с этикеткой «Жир грифона»; Деревянная коробка с керамическим дном, в которой живёт червяк с двумя головами на каждом конце тела; Металлическая урна с прахом героя"
						}
					]
				}
			]
		},
		{
		"name": "artefacts",
		"title": "Артефакты",
		"list": [
				{
					"name": "magicitems",
					"title": "Магические вещи",
					"tooltip": "Русские народные родимые...",
					"schemes": [
						"list"
					],
					"src": [
						{
							"name": "list",
							"type": "list",
							"l": "Сапоги-скороходы; Меч-кладанец; Шапка-невидимка; Гусли-самогуды: Аленький цветочек; Волшебный клубочек"
						}
					]
				}
			]
		}
	]
};


function make_page() {

	var comboBox = makeComboBox(items);

	var out='';
	var out = "<div class='row'><div id='items'>"+comboBox+"</div><div id='result'></div></div>";
	generator="<a href='http://youknowwho.ru/dnd' class='bt'><i class='fa fa-home'></i></a>"+
		"<a class='bt' id='go' title='Выберите список ниже' disabled>Сгенерировать</a>"+
		"<input id='quantity' type='number' class='inpt' value='5' min='1' max='40' title='Количество сгенерированных вещей'/>"+
		"<a class='bt' id='addList' title='Задать список'>Задать список</a>"+
		'<a class="bt" href="http://www.youknowwho.ru/message/?theme=dnditems" target="_blank">Написать отзыв или предложение</a>'+
		"<a class='bt' id='info'><i class='fa fa-question-circle'></i></a>";

  $('body').html("<div id='panel'>"+generator+"</div>"+out)
}

function make_item(src, type, subtype) {
	for (var t1 in src.l) {
		if(src.l[t1].name == type){
			for (var t2 in src.l[t1].list) {
				if (src.l[t1].list[t2].name == subtype) {
					var cur = src.l[t1].list[t2];
					var schemes = shuffle(cur.schemes);
					var schema = schemes[0];
					var item_arr = schema.split(" ");
					var source = cur.src;
					var list;
					for (var i in item_arr) {
						for( var j in source) {
							if(source[j].name==item_arr[i]) {
								list = source[j].l;
								return list;
							}
						}
					}
				}
			}
		}
	}
}

$(window).load(function(){

// init page controlls
make_page();



// open/close combobox
$("body").on('click', ".combo_box_title, .combo_box_arrow", function(){
		var el = $(this).closest(".combo_box").find(".combo_box_content");
		if(el.is(":visible"))
		{
			el.slideUp();
			el.next(".combo_box_arrow").html(ARR_DOWN);
		}
		else
		{
			el.slideDown();
			el.next(".combo_box_arrow").html(ARR_UP);
		}
	});
// get item
$("body").on('click', ".combo_box label", function(){
	var d_root='', d_parent='', trig=true;
	d_root = $(this).find("input[type=checkbox]").attr("data-root");
	d_parent = $(this).find("input[type=checkbox]").attr("data-parent");
	if($(this).find("input[type=checkbox]").prop("checked"))
		{
		trig=false;
		}
	$(this).find("input[type=checkbox]").prop("checked", trig);
	/**/
	if(d_root!='' && d_root!=undefined)
	{
		$("input[type=checkbox][data-parent="+d_root+"]").each(function(){
			$(this).prop( "checked", trig );
		});
	}
	/**/
	if(d_parent!='' && d_parent!=undefined && trig==false)
	{
		$("input[type=checkbox][data-root="+d_parent+"]").prop( "checked", trig);

	}
	/**/
	/**/
	if($("input[type=checkbox]:checked").length<1)
		{
		$("#go").attr("disabled", "disabled");
		}
	else
		{
		$("#go").removeAttr("disabled");
		}
	/**/

	function make_val(ex, ad, dp){
		var ret = '';
		if(dp!=undefined) {
			ad = dp + " " + ad;
		}
		if(ex!=undefined && ex!=""){
			ret = ex+", "+ad;
		} else {
			ret = ad;
		}
		return ret;
	}

	/**/
	var d_root='';
	var before_root='';
	var d_parent='';
	var txt='';
	var value='';
	var title=''
	$(".combo_box_title").html("");
	$(".combo_box_title").attr('data-val',"");
	$("input[type=checkbox]:checked").each(function(){
		d_root='';
		d_parent='';
		d_parent=$(this).attr("data-parent");
		d_root=$(this).attr("data-root");

		title=$(".combo_box_title").html();
		value=$(".combo_box_title").attr('data-val');

		if(title!="" && title.charAt(title.length-1)!="(") {
			$(".combo_box_title").append(", ");
		}
		// обычный пункт
		if(d_parent==undefined && d_root==undefined)
			{
			txt = $(this).parent("label").text();
			title_value = $(".combo_box_title").attr("data-val");
			value = $(this).attr('value');
			dp = $(this).attr('data-parent');
			value = make_val(title_value, value, dp);
			$(".combo_box_title").append(txt).attr("data-val", value);
			}
		// если root
		if(d_root!=undefined)
			{
				// если есть отмеченные потомки
			if($("input[type=checkbox][data-parent="+d_root+"]:checked").length>0)
				{
				txt=$(this).parent("label").text()+" (";
				$(".combo_box_title").append(txt);

				before_root=d_root;
				}
			}
		// если parent
		if(d_parent!=undefined)
			{

				txt=$(this).parent("label").text();
				title_value = $(".combo_box_title").attr("data-val");
				value = $(this).attr('value');
				dp = $(this).attr('data-parent');
				value = make_val(title_value, value, dp);
				var ind = $("input[type=checkbox][data-parent="+d_parent+"").index(this);
				if(ind==$("input[type=checkbox][data-parent="+d_parent+"").length-1 && d_parent==before_root){
					txt+=")";
				}

				$(".combo_box_title").append(txt).attr("data-val", value);
			}
		});

		if($(".combo_box_title").html()=='')
			$(".combo_box_title").html($(this).closest(".combo_box").attr('data-text'));

		// data-parent="human"
	/**/
	return false;
});

// random 
$("body").on('click', "#go", function(){
  var src = $("#selector .combo_box_title").attr("data-val");
  var items_line = src.split(",");
  var quantity = $("input#quantity").val();
  
  var number = /[0-9]+/.test(quantity)? quantity : 5;
  var table = "";
  var item;
  var arr = [];
  var dictionary = [];
  var string = "";

  for(var n in items_line) {
    var subtype = items_line[n].trim().split(" ");
    item = make_item(items, subtype[0], subtype[1]);
	arr.push(item);
  }
  string = arr.join(",");
  
  dictionary = shuffle(string.split(";"));
  
  for (var i = 0; i < number && i < dictionary.length; i++) {
	table+="<tr><td>"+dictionary[i]+"</td></tr>";
  }
  
  table="<table align='center'>"+table+"</table>";
  $("#result").html(table);

});

// add items
$("body").on('click', "#addList", function(){
  if($("#dbg").length>0) {

  } else {
    $("body").append("<div id='dbg'></div>");
  }

  $("#dbg").empty().fadeIn();
    if($("#mod_win").length>0) {
		$("#mod_win").show();
	} else {
		$("body").append("<div id='mod_win' class='mod_win'></div>");
		$("#mod_win").html("<div>Введите список вещей через точку с зарпятой: </div><div id='textarea' contenteditable='true' style='padding: .2em; min-height: 12em; border: 1px solid #999'></div><button class='bt' id='bGetList'>Применить</button>");
	}
});

$("body").on('click', "#dbg", function(){
  $("#dbg").fadeOut();
  if($("#mod_win").length>0) $("#mod_win").hide();
  if($("#mod_win_info").length>0) $("#mod_win_info").hide();
});

$("body").on('click', "#bGetList", function(){
  // генерация

  var list = $("#textarea").text();
  if (list.length>4) {
	 var customList = {
      "name": "customList",
      "title": "Свой список",
      "list": [
        {
          "name": "custom",
          "title": "Свой список",
          "schemes": [
            "custom"
          ],
          "src": [
            {
              "name": "custom",
              "l": list
            }
          ]
        }
      ]
    };

	  if (items.l[items.l.length-1].name == 'customList') {
		// уже есть
		items.l[items.l.length-1] = customList;
	  } else {
		// еще нет
	  items.l.push(customList);
	  }

	  var comboBox = makeComboBox(items);

	  $("#items").empty().append(comboBox);
	  make_dict2(items) ;  
  }
 
  $("#dbg").click();

});

$("body").on('click', "#info", function(){
	if($("#dbg").length>0) {
	} else {
		$("body").append("<div id='dbg'></div>");
	}

	var win_text = "<p>Выберите расу (или несколько, при желании) и нажмите кнопку 'Сгенерировать' в верхней панели. Для каждой выбранной расы сгенерируется 5 имен.</p>"+
	"<p>Также можно генерировать имена на основе собственного списка примеров. Для этого необходимо нажать кнопку 'Задать список' в верхней панели и ввести в открывшемся окне список имен через запятую. После добавления, в списке рас появится еще один пункт (внизу). Если выбрать его и нажать кнопку 'Сгенерировать', будут сгенерированы 5 имен по образцу введенных ранее. В качестве примера для генерации лучше вводить не менее 50 имен.</p>"+
	"<p>GitHub: <a href='https://github.com/Etignis/Names_Generator'>https://github.com/Etignis/Names_Generator</a></p>";
	$("#dbg").empty().fadeIn();
	if($("#mod_win_info").length>0) {
		$("#mod_win_info").show();
	} else {
		$("body").append("<div id='mod_win_info' class='mod_win'></div>");
		$("#mod_win_info").html(win_text);
	}
});

});
