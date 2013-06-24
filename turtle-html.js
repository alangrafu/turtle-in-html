
function loadjq(){
     var script = document.createElement('script');
     script.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js";
     script.onload=loadjqui;
     document.getElementsByTagName('head')[0].appendChild(script);

  }

function loadjqui(){
     var script = document.createElement('script');
     script.src = "http://code.jquery.com/ui/1.10.3/jquery-ui.js";
     script.onload=loadparser;
     document.getElementsByTagName('head')[0].appendChild(script);
}

function loadparser(){
     script = document.createElement('script');
     script.src = "http://graves.cl/turtle-in-html/turtle-parser.js";
     script.onload=loadcss;
     document.getElementsByTagName('head')[0].appendChild(script);
}

function loadcss(){
     script = document.createElement('link');
     script.href = "http://graves.cl/turtle-in-html/style.css";
     script.rel = "stylesheet";
     script.type = "text/css";
     script.onload=findTurtle;
     document.getElementsByTagName('head')[0].appendChild(script);
}

  function findTurtle(){
   $table = $("#__turtletablebody");
   if($table.length == 0){
    $("body").append("<div id='__divturtle' class='__turtlecontainer'><div id='__turtleheader' class='__turtleheader'><span id='__triplecount'></span> triples found <a href='#' id='__closetable' style='font-size:120%;color: white; float:right;text-decoration:none;'>X</a></div><table id='__turtletable' style='padding:10px;width:100%;'><thead><tr><th>Subject</th><th>Predicate</th><th>Object</th></thead><tbody style='max-height:10px;overflow:scroll;' id='__turtletablebody'></tbody></table></div>");
    $( "#__divturtle" ).draggable();

  }else{
    $table.empty();
  }
  $("#__closetable").on("click", function(){$("#__divturtle").hide(300)})
  $results_table = $("#__turtletable");
  $turtle = $("script[type='text/turtle']").html();
  var parser =  new ParseTurtle;
  var data = parser.parse($turtle);
  $("#__triplecount").html(data.length);
  $.each(data, function(i, item){
    o = (item.type=='resource')?"<a class='__turtlelink' href='"+item.object+"'>"+uri2curie(item.object)+"</a>":item.object;
    p = uri2curie(item.predicate);
    s = uri2curie(item.subject);
    $results_table.append("<tr><td class='__turtletd'><a class='__turtlelink' href='"+s+"'>"+item.subject+"</a></td><td class='__turtletd'><a class='__turtlelink' href='"+item.predicate+"'>"+p+"</a></td><td class='__turtletd'>"+o+"</td></tr>");
  }); 
  $("#__divturtle").show(300);
}

function uri2curie(uri){
  	for (i in __ns){
  		var regex = new RegExp(__ns[i],"g");
  		var n=uri.replace(regex, i+":");
  		if(n != uri){
  			return n;
  		}
  	}
  	return uri;
  }

  var __ns = {"yago": "http://dbpedia.org/class/yago/",
  "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
  "foaf": "http://xmlns.com/foaf/0.1/",
  "dbp": "http://dbpedia.org/property/",
  "owl": "http://www.w3.org/2002/07/owl#",
  "dc": "http://purl.org/dc/elements/1.1/",
  "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
  "dbo": "http://dbpedia.org/ontology/",
  "rss": "http://purl.org/rss/1.0/",
  "sc": "http://purl.org/science/owl/sciencecommons/",
  "skos": "http://www.w3.org/2004/02/skos/core#",
  "fb": "http://rdf.freebase.com/ns/",
  "geo": "http://www.w3.org/2003/01/geo/wgs84_pos#",
  "geonames": "http://www.geonames.org/ontology#",
  "sioc": "http://rdfs.org/sioc/ns#",
  "gldp": "http://www.w3.org/ns/people#",
  "gr": "http://purl.org/goodrelations/v1#",
  "cyc": "http://sw.opencyc.org/concept/",
  "akt": "http://www.aktors.org/ontology/portal#",
  "xsd": "http://www.w3.org/2001/XMLSchema#",
  "dbpedia": "http://dbpedia.org/resource/",
  "dcterms": "http://purl.org/dc/terms/",
  "dct": "http://purl.org/dc/terms/",
  "dbpprop": "http://dbpedia.org/property/",
  "swrc": "http://swrc.ontoware.org/ontology#",
  "commerce": "http://search.yahoo.com/searchmonkey/commerce/",
  "admin": "http://webns.net/mvcb/",
  "content": "http://purl.org/rss/1.0/modules/content/",
  "doap": "http://usefulinc.com/ns/doap#",
  "void": "http://rdfs.org/ns/void#",
  "bibo": "http://purl.org/ontology/bibo/",
  "vcard": "http://www.w3.org/2006/vcard/ns#",
  "xhtml": "http://www.w3.org/1999/xhtml#",
  "org": "http://www.w3.org/ns/org#",
  "dc11": "http://purl.org/dc/elements/1.1/",
  "gen": "http://www.w3.org/2006/gen/ont#",
  "bill": "http://www.rdfabout.com/rdf/schema/usbill/",
  "aiiso": "http://purl.org/vocab/aiiso/schema#",
  "qb": "http://purl.org/linked-data/cube#",
  "wot": "http://xmlns.com/wot/0.1/",
  "nie": "http://www.semanticdesktop.org/ontologies/2007/01/19/nie#",
  "d2rq": "http://www.wiwiss.fu-berlin.de/suhl/bizer/D2RQ/0.1#",
  "test2": "http://this.invalid/test2#",
  "rel": "http://purl.org/vocab/relationship/",
  "cc": "http://creativecommons.org/ns#",
  "dcmit": "http://purl.org/dc/dcmitype/",
  "http": "http://www.w3.org/2006/http#",
  "og": "http://opengraphprotocol.org/schema/",
  "factbook": "http://www4.wiwiss.fu-berlin.de/factbook/ns#",
  "vann": "http://purl.org/vocab/vann/",
  "ex": "http://example.com/",
  "bio": "http://purl.org/vocab/bio/0.1/",
  "mo": "http://purl.org/ontology/mo/",
  "ad": "http://schemas.talis.com/2005/address/schema#",
  "event": "http://purl.org/NET/c4dm/event.owl#",
  "media": "http://purl.org/microformat/hmedia/",
  "book": "http://purl.org/NET/book/vocab#",
  "earl": "http://www.w3.org/ns/earl#",
  "cv": "http://purl.org/captsolo/resume-rdf/0.2/cv#",
  "ical": "http://www.w3.org/2002/12/cal/ical#",
  "botany": "http://purl.org/NET/biol/botany#",
  "tag": "http://www.holygoat.co.uk/owl/redwood/0.1/tags/",
  "air": "http://dig.csail.mit.edu/TAMI/2007/amord/air#",
  "dv": "http://rdf.data-vocabulary.org/#",
  "dcq": "http://purl.org/dc/terms/",
  "cld": "http://purl.org/cld/terms/",
  "swc": "http://data.semanticweb.org/ns/swc/ontology#",
  "musim": "http://purl.org/ontology/similarity/",
  "biblio": "http://purl.org/net/biblio#",
  "reco": "http://purl.org/reco#",
  "drugbank": "http://www4.wiwiss.fu-berlin.de/drugbank/resource/drugbank/",
  "af": "http://purl.org/ontology/af/",
  "dir": "http://schemas.talis.com/2005/dir/schema#",
  "rev": "http://purl.org/stuff/rev#",
  "days": "http://ontologi.es/days#",
  "ctag": "http://commontag.org/ns#",
  "log": "http://www.w3.org/2000/10/swap/log#",
  "sd": "http://www.w3.org/ns/sparql-service-description#",
  "cs": "http://purl.org/vocab/changeset/schema#",
  "osag": "http://www.ordnancesurvey.co.uk/ontology/AdministrativeGeography/v2.0/AdministrativeGeography.rdf#",
  "xhv": "http://www.w3.org/1999/xhtml/vocab#",
  "co": "http://purl.org/ontology/co/core#",
  "rdfg": "http://www.w3.org/2004/03/trix/rdfg-1/",
  "daia": "http://purl.org/ontology/daia/",
  "sism": "http://purl.oclc.org/NET/sism/0.1/",
  "mu": "http://www.kanzaki.com/ns/music#",
  "ome": "http://purl.org/ontomedia/core/expression#",
  "fn": "http://www.w3.org/2005/xpath-functions#",
  "memo": "http://ontologies.smile.deri.ie/2009/02/27/memo#",
  "cfp": "http://sw.deri.org/2005/08/conf/cfp.owl#",
  "cmp": "http://www.ontologydesignpatterns.org/cp/owl/componency.owl#",
  "owlim": "http://www.ontotext.com/trree/owlim#",
  "xfn": "http://vocab.sindice.com/xfn#",
  "cal": "http://www.w3.org/2002/12/cal/ical#",
  "afn": "http://jena.hpl.hp.com/ARQ/function#",
  "ok": "http://okkam.org/terms#",
  "xs": "http://www.w3.org/2001/XMLSchema#",
  "giving": "http://ontologi.es/giving#",
  "ir": "http://www.ontologydesignpatterns.org/cp/owl/informationrealization.owl#",
  "xf": "http://www.w3.org/2002/xforms/",
  "dbr": "http://dbpedia.org/resource/"
}

window.onload=loadjq();