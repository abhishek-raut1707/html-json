
var confluence = require('confluence-api');
var striptags = require('striptags');
dataModel = [];
var configAmogh = {
	username: "amogh.bhatnagar@sagacitysoftware.co.in",
	password: "Amo@saga@123",
	baseUrl: "http://englishlogica.atlassian.net/wiki"
};

var configAbhi = {
	username: "abhishek.raut1707@gmail.com",
	password: "Abhi1726",
	baseUrl: "http://abhishek-raut1707.atlassian.net/wiki"
}


// HTML to JSON of any Content ID
exports.contentIdFind = function(req, res) 
{
	console.time('TIME : ===')
	// Content ID
	console.log(req.body.contentId);
	var contentId = req.body.contentId;
	var Conf = new confluence(configAmogh);
	Conf.getContentById(contentId, function(err, data) {
		if(err) {
			console.log(err);
			res.json({status: false});
		}
		if(data) {
			console.log("Data === ", data);
			
			//console.log(data.body.storage.value);
			var temp = data.body.storage.value;
			console.log('temp ===', temp);
			
			// Remove the HTML tags from the content;
			var dataContent = striptags(temp, [], ' ');
			//console.log(StripedContent);

			var CheckMeaningTabs = /Meaning ID:\s*[A-Za-z0-9]/g;
			
			var matches = dataContent.match(CheckMeaningTabs);

			for(var i = 0; i < matches.length; i++) {
				var block0 = matches[0];
				var block1 = matches[1];
				var block2 = matches[2];
			}

			// console.log('block0 ', block0);
			// console.log('block1 ', block1);
			// console.log('block2 ', block2);
			
			
			
			if(block0) {
				if(block1 === undefined && block2 === undefined) {
					var tab1 = dataContent;
					//console.log('block1 && block2 === undefined ', tab1);
					
				} else if(block1 && block2 === undefined) {
					const indexFrom = dataContent.indexOf(block0);
					const indexTo = dataContent.indexOf(block1);
					var tab1 = dataContent.substring(indexFrom, indexTo);
					//console.log('Block 1 present ===', tab1);
					
				} else if(block2) {
					//console.log('Block2 is present');
				}
				
				// //Meaning ID of 1
				const MeaningIDregex = /(M|m)eaning ID\s*:\s*(.*)\s*(S|s)tatus\s*:/gm;
				const MeaningId = MeaningIDregex.exec(tab1);
				//console.log('MeaningId[2] ===', MeaningId[2]);
				var MeaningIDTab1 = MeaningId[2];
				

				//Status of 1
				const Statusregex = /Status\s*:\s*(.*)\s*Meaning\s*:/gm;
				const Status = Statusregex.exec(tab1);
				//console.log('Status[1] ===', Status[1]);
				var StatusTab1 = Status[1];

				// Meanings of 1
				const Meaningregex = /(M|m)eaning\s*:\s*(.*)\s*((N|n)otes\s*:|(P|p)art\s*(O|o)f\s*(S|s)peech\s*:)/gm;
				const Meaning = Meaningregex.exec(tab1);
				//console.log('Meaning[2] ===', Meaning[2]);
				var MeaningTab1 = Meaning[2];

				// Notes of 1 
				const Notesregex = /((N|n)otes\s*:|(P|p)art\s*(O|o)f\s*(S|s)peech\s*:)\s*(.*)\s*(P|p)opularity:/gm;
				const Notes = Notesregex.exec(tab1);
				//console.log('Notes[6] ===', Notes[6]);
				var NotesTab1 = Notes[6];

				// Popularity of 1
				const Popularityregex = /(P|p)opularity\s*:\s*(.*)\s*(B|b)est\s*(W|w)ay\s*(t|T)o\s*(M|m)emorize\s*:/gm;
				const Popularity = Popularityregex.exec(tab1);
				//console.log('Popularity[2] ===', Popularity[2]);
				var PopularityTab1 = Popularity[2];
				
				// Best way to memorize
				const BWTMregex = /(B|b)est\s*(W|w)ay\s*(T|t)o\s*(M|m)emorize\s*:\s*(.*)\s*(C|c)ategories\s*:/gm;
				const BWTM = BWTMregex.exec(tab1);
				//console.log('BWTM[5] ===', BWTM[5]);
				var BWTMTab1 = BWTM[5];

				// Example(s) to 1 
				const Exampleregex = /(E|e)xample\Ss\S\s*:\s*(.*)\s*(F|f)urther\s*(S|s)uggestions\s*:/gm;
				const Example = Exampleregex.exec(tab1);
				//console.log('Example[2] ===', Example[2]);
				var ExampleTab1 = Example[2];

				// Further Sugg of 1
				const FurtherSuggregex = /(F|f)urther\s*(S|s)uggestions\s*:\s*(.*)/gm;
				const FurtherSugg = FurtherSuggregex.exec(tab1);
				//console.log('FurtherSugg[3] ===', FurtherSugg[3]);
				var FurtherSuggTab1 = FurtherSugg[3];
				

				var Tab1Obj = {};
				Tab1Obj.MeaningID = MeaningIDTab1;
				Tab1Obj.Status = StatusTab1;
				Tab1Obj.Meaning = MeaningTab1;
				Tab1Obj.Notes = NotesTab1;
				Tab1Obj.Popularity = PopularityTab1;
				Tab1Obj.BWTM = BWTMTab1;
				Tab1Obj.Examples = ExampleTab1;
				Tab1Obj.FurtherSugg = FurtherSuggTab1;

				console.log('Tab-1 Object  =====', Tab1Obj);

			}
			if(block1 && block2 === undefined) {
				
				var splitFromIndex = dataContent.indexOf(matches[1]);
				var tab2 = dataContent.substring(splitFromIndex);
				//console.log(tab2);
				
				// //Meaning ID of 1
				const MeaningIDregex = /(M|m)eaning ID\s*:\s*(.*)\s*(S|s)tatus\s*:/gm;
				const MeaningId = MeaningIDregex.exec(tab2);
				//console.log('MeaningId[2] ===', MeaningId[2]);
				var MeaningIDTab2 = MeaningId[2];
				

				//Status of 1
				const Statusregex = /Status\s*:\s*(.*)\s*Meaning\s*:/gm;
				const Status = Statusregex.exec(tab2);
				//console.log('Status[1] ===', Status[1]);
				var StatusTab2 = Status[1];

				// Meanings of 1
				const Meaningregex = /(M|m)eaning\s*:\s*(.*)\s*((N|n)otes\s*:|(P|p)art\s*(O|o)f\s*(S|s)peech\s*:)/gm;
				const Meaning = Meaningregex.exec(tab2);
				//console.log('Meaning[2] ===', Meaning[2]);
				var MeaningTab2 = Meaning[2];

				// Notes of 1 
				const Notesregex = /((N|n)otes\s*:|(P|p)art\s*(O|o)f\s*(S|s)peech\s*:)\s*(.*)\s*(P|p)opularity:/gm;
				const Notes = Notesregex.exec(tab2);
				//console.log('Notes[6] ===', Notes[6]);
				var NotesTab2 = Notes[6];

				// Popularity of 1
				const Popularityregex = /(P|p)opularity\s*:\s*(.*)\s*(B|b)est\s*(W|w)ay\s*(t|T)o\s*(M|m)emorize\s*:/gm;
				const Popularity = Popularityregex.exec(tab2);
				//console.log('Popularity[2] ===', Popularity[2]);
				var PopularityTab2 = Popularity[2];
				
				// Best way to memorize
				const BWTMregex = /(B|b)est\s*(W|w)ay\s*(T|t)o\s*(M|m)emorize\s*:\s*(.*)\s*(C|c)ategories\s*:/gm;
				const BWTM = BWTMregex.exec(tab2);
				//console.log('BWTM[5] ===', BWTM[5]);
				var BWTMTab2 = BWTM[5];

				// Example(s) to 1 
				const Exampleregex = /(E|e)xample\Ss\S\s*:\s*(.*)\s*(F|f)urther\s*(S|s)uggestions\s*:/gm;
				const Example = Exampleregex.exec(tab2);
				//console.log('Example[2] ===', Example[2]);
				var ExampleTab2 = Example[2];

				// Further Sugg of 1
				const FurtherSuggregex = /(F|f)urther\s*(S|s)uggestions\s*:\s*(.*)/gm;
				const FurtherSugg = FurtherSuggregex.exec(tab2);
				//console.log('FurtherSugg[3] ===', FurtherSugg[3]);
				var FurtherSuggTab2 = FurtherSugg[3];
				

				var Tab2Obj = {};
				Tab2Obj.MeaningID = MeaningIDTab2;
				Tab2Obj.Status = StatusTab2;
				Tab2Obj.Meaning = MeaningTab2;
				Tab2Obj.Notes = NotesTab2;
				Tab2Obj.Popularity = PopularityTab2;
				Tab2Obj.BWTM = BWTMTab2;
				Tab2Obj.Examples = ExampleTab2;
				Tab2Obj.FurtherSugg = FurtherSuggTab2;

				console.log('Tab-2 Object ====', Tab2Obj);
				
				
			}
		}
		res.json({
			content: {
				tab1: Tab1Obj,
				tab2: Tab2Obj
			},
			status: true
		});


		Tab1Obj = {};
		Tab2Obj = {};
	});
	console.timeEnd('TIME : ===')
}