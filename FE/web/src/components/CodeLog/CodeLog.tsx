import classes from './CodeLog.module.scss'
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
  
  return (
      <div>
        <pre className={classes.code}>
        {code}
        </pre>
      </div>
    )
}
  
export default CodeLog