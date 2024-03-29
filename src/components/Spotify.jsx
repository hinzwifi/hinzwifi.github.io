import { useEffect, useState } from "react";
import axios from "axios";
function Spotify() {
  const ClientId = "";
  const ClientSecret = "";
  const [Token, setToken] = useState(false);
  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(ClientId + ":" + ClientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      setToken(tokenResponse.data.access_token);
      console.log(tokenResponse);
      axios("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + Token,
        },
      }).then((genreResponse) => {
        console.log(genreResponse);
      });
    });
  }, []);

  return <div>Spotify</div>;
}

export default Spotify;
