import classes from './CodeLog.module.scss'
import hljs from 'highlight.js';
// import 'highlight.js/styles/atom-one-dark.css';
import './catppuccin-mocha.css';
function CodeLog() {
  const code = `
  import java.util.*;
  public class Main{
    public static void main(String args[]){
      Scanner sc = new Scanner(System.in);
      int a, b;
      a = sc.nextInt();
      b = sc.nextInt();
      System.out.println(a + b);
    }
  }
  `;

  const html = hljs.highlightAuto(code).value;
  console.log(html);

  return (
    <pre className={`${classes.code} hljs`}>
      <code className="hljs" dangerouslySetInnerHTML={{ __html: html }} />
    </pre>

  );
}

export default CodeLog;