import {useEffect, useRef, useState} from "react";
import {ChatEngine} from "react-chat-engine";
import Header from "../../components/ChatpageHeader/index";
import "./chatpage.scss";
import {useAuth} from "../../contexts/AuthContext";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {parseMessage} from "../../utils/queryGenerator";

const Chats = () => {
  const didMountRef = useRef(false);
  const { currentUser } = useAuth();
  const user = currentUser;
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  console.log(user.uid);

  async function callback(cid, msg) {
    const str = await parseMessage(msg)
    if (!!str) {
      let results
      const url = `https://serpapi.com/search.json?q=${str}&tbm=shop&location=india&hl=en&gl=in&api_key=5d67a583b12201e266bd9792d688014f4892df464cad776a84fd764c97c76a2a&num=3`
      try {
        results = await fetch(url, {
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        })

        results = await results.json()
      } catch (e) {
        // do nothing
        console.log(e)
      }
      console.log(results)
    }
    else console.log('nvm')
    console.log("yoohoo!")
  }

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      if (!user || user === null) {
        history.push("/login");
        return;
      }

      //Create or Get User

      axios
        .get("https://api.chatengine.io/users/me/", {
          headers: {
            "project-id": "ac552d08-a18d-406c-8c25-0fe80ab4d1dc",
            "user-name": user.email,
            "user-secret": user.uid,
          },
        })

        .then((response) => {
          console.log(response);
          setLoading(false);
        })

        .catch((e) => {
          console.log("e", e.response);
          let formdata = new FormData();
          formdata.append("email", user.email);
          formdata.append("username", user.email);
          formdata.append("secret", user.uid);

          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "PRIVATE-KEY": "029f0c1a-bc16-44cd-b928-9c87890f152d",
              },
            })
            .then((response) => {
              console.log(response);
              setLoading(false);
            })
            .catch((e) => console.log("e", e.response));
        });
    }
  }, [user, history]);

  if (!user || loading) return "Loading..";

  return (
    <div>
      <Header />
      <div className="body">
        <ChatEngine
			height='92vh'
			userName={user.email}
			userSecret={user.uid}
			projectID='ac552d08-a18d-406c-8c25-0fe80ab4d1dc'
            onNewMessage={callback}
		/>
      </div>
    </div>
  );
};
export default Chats;