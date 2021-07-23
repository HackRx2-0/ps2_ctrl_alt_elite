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

  const $ = document.querySelector.bind(document)

  async function callback(cid, msg) {
    const str = await parseMessage(msg)
    let results
    if (!!str) {
      const url = `http://localhost:8080/serp/results?q=` + str
      try {
        let res = await fetch(url)
        res = await res.json()
        console.log(res['shopping_results'])
        if (!$('#ce-settings-container-recommendations')) {
          let div = document.createElement('div')
          div.setAttribute('id', 'ce-settings-container-recommendations')
          $('.ce-settings-container').appendChild(div)
        }
        $('#ce-settings-container-recommendations').innerHTML = '<h3>Recommendations</h3><br><ul>'
        res['shopping_results'].forEach(v => {
          $('#ce-settings-container-recommendations').innerHTML +=
              `<li><a href="${v['link']}">${v.source + ' | ' + v.title + ' | ' + v.price ?? ''}</a></li>`
        })
        $('#ce-settings-container-recommendations').innerHTML += '</ul>'

      } catch (e) {
        return null
      }
    } else console.log('nvm')
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