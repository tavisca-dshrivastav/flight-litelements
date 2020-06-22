import { LitElement, html, css, property } from 'lit-element';

export class OrxeTimeLine extends LitElement {

  @property()
  data =[]; 

  /**
   *
   */
  constructor() {
    super();
    
  
    this.data.push({"title" :"Stop-1 Pune" , "desc" :"Pune AirPort at 2.30 PM" , "side":"left"});
    this.data.push({"title" :"Stop-1 Pune" , "desc" :"Pune AirPort at 2.30 PM" , "side":"right"});
    this.data.push({"title" :"Stop-1 Pune" , "desc" :"Pune AirPort at 2.30 PM" ,"side":"left"});
    this.data.push({"title" :"Stop-1 Pune" , "desc" :"Pune AirPort at 2.30 PM" , "side":"right"});
  }

static get styles(){
      return css`
    *{
        box-sizing: border-box;
      }
      /* Set a background color */
      body {
        background-color: #19529C;
        font-family: Helvetica, sans-serif;
      }
      /* The actual timeline (the vertical ruler) */
      .timeline {
        position: relative;
        max-width: 700px;
        margin: 0 auto;
      }
      /* The actual timeline (the vertical ruler) */
      .timeline::after {
        content: '';
        position: absolute;
        width: 6px;
        background-color: maroon;
        top: 0;
        bottom: 0;
        left: 50%;
        margin-left: -3px;
      }
      /* Container around content */
      .container {
        padding: 10px 50px;
        position: relative;
        background-color: inherit;
        width: 50%;
      }
      /* The circles on the timeline */
      .container::after {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        right: -17px;
        background-color: #61D4E8;
        border: 4px solid rgb(228, 99, 13);
        top: 15px;
        border-radius: 50%;
        z-index: 1;
      }
      /* Place the container to the left */
      .left {
        left: 0;
      }
      /* Place the container to the right */
      .right {
        left: 50%;
      }
      /* Add arrows to the left container (pointing right) */
      .left::before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        right: 30px;
        border: medium solid blue;
        border-width: 10px 0 10px 10px;
        border-color: transparent transparent transparent gray;
      }
      /* Add arrows to the right container (pointing left) */
      .right::before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        left: 30px;
        border: medium solid green;
        border-width: 10px 10px 10px 0;
        border-color: transparent gray transparent transparent;
      }
      /* Fix the circle for containers on the right side */
      .right::after {
        left: -16px;
      }
      /* The actual content */
      .content {
        padding: 1px 20px;
        background-color: gray;
        position: relative;
        border-radius: 6px;
      }
      /* Media queries - Responsive timeline on screens less than 600px wide */
      @media screen and (max-width: 600px) {
      /* Place the timelime to the left */
        .timeline::after {
          left: 31px;
        }
      /* Full-width containers */
        .container {
          width: 100%;
          padding-left: 70px;
          padding-right: 25px;
        }
      /* Make sure that all arrows are pointing leftwards */
        .container::before {
          left: 60px;
          border: medium solid rgb(68, 184, 33);
          border-width: 10px 10px 10px 0;
          border-color: transparent gray transparent transparent;
        }
      /* Make sure all circles are at the same spot */
        .left::after, .right::after {
          left: 15px;
        }
      /* Make all right containers behave like the left ones */
        .right {
          left: 0%;
        }
      }
    `;
}

  render() {
    return html`
    <div class="timeline">
    ${this.data.map(item => html`
    
    <div class="container ${item.side}">
      <div class="content">
      <h2>${item.title}</h2>
      <p>${item.desc}</p>
      </div>    
    </div>`
    )}

    </div>   
    `;
  }
}