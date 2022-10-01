import React, { useEffect, useRef } from "react";
import Script from 'next/script';
import { generateSignature } from './api/ZoomSDK.js';


const Zoom = () => {
  const zoomRef = useRef(null);

  useEffect(() => {

    const client = ZoomMtgEmbedded.createClient();

    const sdkKey = process.env.NEXT_PUBLIC_ZOOM_SDK_KEY;
    const sdkSecret = process.env.NEXT_PUBLIC_ZOOM_SDK_SECRET;
    const jwtKey = process.env.NEXT_PUBLIC_ZOOM_JWT_KEY;
    const jwtSecret = process.env.NEXT_PUBLIC_ZOOM_JWT_SECRET;
    const meetingNumber = 94362336540;
    const name = "williampan4032@gmail.com";
    const signature = generateSignature(sdkKey, sdkSecret, meetingNumber, 0);
    const pass = "";
    console.log(typeof meetingNumber.toString());

    client.init({
      debug: true,
      zoomAppRoot: zoomRef.current,
      language: 'en-US',
      customize: {
        meetingInfo: [
          'topic',
          'host',
          'mn',
          'pwd',
          'telPwd',
          'invite',
          'participant',
          'dc',
          'enctype',
        ],
        toolbar: {
          buttons: [
            {
              text: 'Custom Button',
              className: 'CustomButton',
              onClick: () => {
                console.log('custom button');
              },
            },
          ],
        },
      },
    });

    client.join({
      sdkKey: sdkKey,
      signature: signature,
      meetingNumber: meetingNumber,
      password: pass,
      userName: name,
    })
  }, [])


  return (
    <>
      <div>
        Zoom Test Here
      </div>
      <link
        type="text/css"
        rel="stylesheet"
        href="https://source.zoom.us/2.2.0/css/react-select.css"
      />

      <Script src="https://source.zoom.us/2.2.0/lib/vendor/react.min.js" strategy="beforeInteractive" />
      <Script src="https://source.zoom.us/2.2.0/lib/vendor/react-dom.min.js" strategy="beforeInteractive" />
      <Script src="https://source.zoom.us/2.2.0/lib/vendor/redux.min.js" strategy="beforeInteractive" />
      <Script src="https://source.zoom.us/2.2.0/lib/vendor/redux-thunk.min.js" strategy="beforeInteractive" />
      <Script src="https://source.zoom.us/2.2.0/lib/vendor/lodash.min.js" strategy="beforeInteractive" />
      <Script src="https://source.zoom.us/2.2.0/zoom-meeting-embedded-2.2.0.min.js" strategy="beforeInteractive" />

      <div id="”meetingSDKElement”" ref={zoomRef} />
      <div>
        Zoom Test Here
      </div>
      </>
    )
}

export default Zoom