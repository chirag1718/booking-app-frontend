import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <div className="mailWrapper">
        <h1 className="mailTitle">Save Time Save Money</h1>
        <span className="mailDesc">
          Sign up and we'll send the best deals to you
        </span>
        <div className="mailInputContainer">
          <input type="text" placeholder="Your E-mail" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default MailList;
