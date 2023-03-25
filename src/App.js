import logo from "./logo.svg";
import "./App.css";

function App() {
  function Iframe(props) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
      />
    );
  }

  const NavBar = () => {
    return (
      <div
        style={{
          width: "100%",
          height: "50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 20px",
          backgroundColor: "#588291",
          color: "#fff",
          position: "fixed",
          top: "0px",
          boxShadow: "0px 0px 10px 3px rgba(0,0,0,0.75)",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Dashboard
        </div>
      </div>
    );
  };

  return (
    <div style={{ margin: "0px auto 0px auto", maxWidth: "100vw" }}>
      <NavBar />

      <div
        style={{
          marginTop: "100px",
        }}
      >
        <center style={{ color: "#274b6d" }}>Gas Leak ALert</center>
        <Iframe
          iframe={`<iframe width="400" height="250" style="border: 1px solid #fff;" src="https://thingspeak.com/channels/2037979/widgets/617996&width=400"></iframe>`}
          allow="autoplay"
        />
        <Iframe
          iframe={`<iframe width="400" height="250" style="border: 1px solid #fff;" src="https://thingspeak.com/channels/2037979/charts/1?bgcolor=%23ffffff&color=%23d62020&days=30&dynamic=true&max=6&min=0&results=10000&title=Strain+Sensor&type=column&yaxis=Weight&width=400"></iframe>`}
          allow="autoplay"
        />
        <Iframe
          iframe={`<iframe width="400" height="250" style="border: 1px solid #fff;" src="https://thingspeak.com/channels/2037979/charts/2?bgcolor=%23ffffff&color=%23d62020&days=30&dynamic=true&results=10000&title=MQ+Gas+Sensor&type=column&yaxis=Practicals&width=400"></iframe>`}
          allow="autoplay"
        />
      </div>
    </div>
  );
}

export default App;
