## Java를 통한 XML 파싱
~~~
BufferedReader br = null;
DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
factory.setNamespaceAware(true);
DocumentBuilder builder;
Document doc = null;
~~~
factory를 생성 후 builder를 생성한다. (xml를 파싱하기 위함)
~~~
try {
      String urlstr = "xml 주소";
      URL url = new URL(urlstr);
      HttpURLConnection urlconnection = (HttpURLConnection) url.openConnection();
      br = new BufferedReader(new InputStreamReader(urlconnection.getInputStream(), "UTF-8"));
      String result = "";
      String line;
      while ((line = br.readLine()) != null) {
            result = result + line.trim();
      }
~~~
result 에는 해당 주소 내용들이 string 으로 저장됨
~~~
      InputSource is = new InputSource(new StringReader(result));
      builder = factory.newDocumentBuilder();
      doc = builder.parse(is);
      XPathFactory xpathFactory = XPathFactory.newInstance();
      XPath xpath = xpathFactory.newXPath();
      XPathExpression expr = xpath.compile("//location/data");
      NodeList nodeList = (NodeList) expr.evaluate(doc, XPathConstants.NODESET);
      for (int i = 0; i < nodeList.getLength(); i++) {
           NodeList child = nodeList.item(i).getChildNodes();
           for (int j = 0; j < child.getLength(); j++) {
                Node node = child.item(j);
                System.out.println("현재 노드 이름 : " + node.getNodeName());
                System.out.println("현재 노드 타입 : " + node.getNodeType());
                System.out.println("현재 노드 값 : " + node.getTextContent());
                System.out.println("현재 노드 네임스페이스 : " + node.getPrefix());
                System.out.println("현재 노드의 다음 노드 : " + node.getNextSibling());
                System.out.println("");
           }
      }
} 
~~~
xml 파싱 과정

xpath.compile("") 에는 문법이 적용됨
~~~
data : <data>요소를 모두 선택함
/data : "/" 루트 노드의 자식 노드중에서 <data>엘리먼트를 선택함 (앞에 "/"가 들어가면 절대 경로)
data/pop : <data>엘리먼트의 자식 노드중에서 <pop>엘리먼트를 선택 (상대 경로)
// : 현재 노드의 위치와 상관없이 지정된 노드부터 탐색
//data : 위치와 상관없이 엘리먼트 이름이 <data>인 모든 엘리먼트
data/@id : 모든 <data>엘리먼트의 id속성 노드를 모두 선택함
data[k] : <data>엘리먼트 중에서 k번 째 <data>엘리먼트
data[@attr = val] : attr이라는 속성이 val값을 가지는 모든 <data>엘리먼트
~~~
> 참고 사이트 : 기본기를 쌓는 정아마추어 코딩블로그
