function Header() {
  return (
    <header>
      <div className="openForWorkLabel">
        <div className="circleContainer">
          <div className="circle"></div>
          <div className="innerCircle"></div>
        </div>
        <p>Open For Work</p>
      </div>
      <a
        href="https://drive.google.com/file/d/17FyOY6oTg1N--do7KYym25cg6mTfuh8c/view?usp=sharing"
        target="_blank"
      >
        <div className="openForWorkLabel resume">
          <p>Resume</p>
        </div>
      </a>
    </header>
  );
}

export default Header;
