
const File = require('./src/file/File')
const Batch = require('./src/batch/Batch')
const FileHeader = require('./src/file/FileHeader')
const EntryPPD = require('./src/entry/EntryPPD')
const EntryAddenda = require('./src/entryAddenda/EntryAddenda')

var f = new File({
    immediateDestination: "092905249",
    immediateDestinationName: "Stockman Bank of Montana",
    immediateOrigin: "092905249",
    immediateOriginName: "Stockman Bank of Montana",
    fileCreationDate: "190124",
    fileCreationTime: "1925"
});
var b = new Batch();
var e = new EntryPPD();
var ea = new EntryAddenda();


e.addAddenda(ea);
b.addEntry(e);
f.addBatch(b);
//console.log(f.header);
