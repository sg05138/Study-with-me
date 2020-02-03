import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.StringReader;
import java.net.HttpURLConnection;
import java.net.URL;
 
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpression;
import javax.xml.xpath.XPathFactory;
 
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
 
 
public class OpenApi {
    public static void main(String[] args) {
        BufferedReader br = null;
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        factory.setNamespaceAware(true);
        DocumentBuilder builder;
        Document doc = null;
        try{            
            String urlstr = "xml주소";
            URL url = new URL(urlstr);
            HttpURLConnection urlconnection = (HttpURLConnection) url.openConnection();
            urlconnection.setRequestMethod("GET");
            br = new BufferedReader(new InputStreamReader(urlconnection.getInputStream(),"UTF-8"));
            String result = "";
            String line;
            while((line = br.readLine()) != null) {
                result = result + line + "\n";
            }
            InputSource is = new InputSource(new StringReader(result));
            builder = factory.newDocumentBuilder();
            doc = builder.parse(is);
            XPathFactory xpathFactory = XPathFactory.newInstance();
            XPath xpath = xpathFactory.newXPath();
            XPathExpression expr = xpath.compile("//item");
            XPathExpression ex = xpath.compile("//item/announceTime");
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
        }catch(Exception ex){
            System.out.println(ex.getMessage());
        }
    }
}