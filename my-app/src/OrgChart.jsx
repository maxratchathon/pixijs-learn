import React from 'react'
import { Application, Assets, Container, Sprite, Text} from 'pixi.js';

const OrgChart = () => {
    (async () => {
        const app = new Application();
        await app.init({ background: '#1099bb', resizeTo: window });

        document.body.appendChild(app.canvas);

        const container = new Container();

        app.stage.addChild(container);
        
        const texture = await Assets.load('https://pixijs.com/assets/bunny.png');

        for (let i = 0; i < 60; i++)
            {
                const text = new Text({
                    text: "hello",
                    style: {
                                 fontFamily: 'Arial',
                                fontSize: 24,
                                 fill: 0xff1010,
                                 align: 'center',
                         }
                })
                const bunny = new Sprite(texture);

                text.x = (i % 5) * 40;
                text.y = Math.floor(i / 5) * 40;

                bunny.x = (i % 5) * 40;
                bunny.y = Math.floor(i / 5) * 40;
                container.addChild(bunny);
                container.addChild(text)
            }

                // Move the container to the center
    container.x = app.screen.width / 2;
    container.y = app.screen.height / 2;

     // Center the bunny sprites in local container coordinates
     container.pivot.x = container.width / 2;
     container.pivot.y = container.height / 2;
 
     // Listen for animate update
     app.ticker.add((time) =>
     {
         // Continuously rotate the container!
         // * use delta to create frame-independent transform *
         container.rotation -= 0.01 * time.deltaTime;
     });



        
    })();
    

  return (
    <div>OrgChart</div>
  )
}

export default OrgChart