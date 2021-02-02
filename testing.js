console.log("script is up");

// let pa=document.getElementById("webkit-xml-viewer-source-xml");

let inp = `<dataset>
<record>
<id>1</id>
<first_name>Gordon</first_name>
<last_name>Matuszewski</last_name>
<email>gmatuszewski0@nba.com</email>
<gender>Male</gender>
<ip_address>45.144.247.166</ip_address>
</record>
<record>
<id>2</id>
<first_name>Jervis</first_name>
<last_name>Sewter</last_name>
<email>jsewter1@stumbleupon.com</email>
<gender>Male</gender>
<ip_address>182.90.226.143</ip_address>
</record>
<record>
<id>3</id>
<first_name>Jennifer</first_name>
<last_name>Loughran</last_name>
<email>jloughran2@51.la</email>
<gender>Female</gender>
<ip_address>219.217.226.1</ip_address>
</record>
<record>
<id>4</id>
<first_name>Laura</first_name>
<last_name>Portsmouth</last_name>
<email>lportsmouth3@google.fr</email>
<gender>Female</gender>
<ip_address>215.119.207.65</ip_address>
</record>
<record>
<id>5</id>
<first_name>Dareen</first_name>
<last_name>Demanche</last_name>
<email>ddemanche4@t.co</email>
<gender>Female</gender>
<ip_address>124.36.117.124</ip_address>
</record>
<record>
<id>6</id>
<first_name>Cassandre</first_name>
<last_name>Sarsons</last_name>
<email>csarsons5@so-net.ne.jp</email>
<gender>Female</gender>
<ip_address>34.179.21.249</ip_address>
</record>
<record>
<id>7</id>
<first_name>Adelheid</first_name>
<last_name>Willingale</last_name>
<email>awillingale6@examiner.com</email>
<gender>Female</gender>
<ip_address>190.49.214.149</ip_address>
</record>
<record>
<id>8</id>
<first_name>Ernestus</first_name>
<last_name>Wigglesworth</last_name>
<email>ewigglesworth7@prweb.com</email>
<gender>Male</gender>
<ip_address>67.38.0.5</ip_address>
</record>
<record>
<id>9</id>
<first_name>Stoddard</first_name>
<last_name>Kaminski</last_name>
<email>skaminski8@un.org</email>
<gender>Female</gender>
<ip_address>82.211.5.201</ip_address>
</record>
<record>
<id>10</id>
<first_name>Emmy</first_name>
<last_name>Lougheed</last_name>
<email>elougheed9@phoca.cz</email>
<gender>Male</gender>
<ip_address>61.224.77.48</ip_address>
</record>
</dataset>
`;

parser = new DOMParser();
xmlDoc = parser.parseFromString(inp, "text/xml");

//xmlDoc.getElementsByTagName("dataset")[0].childNodes[0].nodeValue;
let ls = xmlDoc.getElementsByTagName("record");

for (let eachRecord of ls) {
    for (let dataObj of eachRecord.childNodes) {
        if (dataObj.nodeName !== "#text") {
            console.log(
                dataObj.childNodes[0].parentNode.nodeName,
                dataObj.childNodes[0].nodeValue
            );
        }
    }
}
