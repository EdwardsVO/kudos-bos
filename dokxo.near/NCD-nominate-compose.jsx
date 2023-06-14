const CardStyled = styled.div`
  background: #F5ECFF;
  padding:15px;
  border-radius:10px;
  `;
const ProfilePictureBtn = styled.button`
  background: #FFFFFF;
  padding:15px;
  border-width: 2px;
  border-radius:10px;
  border-style: solid;
  border-color: #000000;
  text-align: center;
  align-items:center;
  margin-bottom:15px;
  `;
const ProfileImgStyled = styled.img`
  width:40px;
  heigth:40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-bottom:15px;
  `;
const H3text = styled.h3`
  color:#838181;
  font-weight:400;
  font-size:24px;
  `;
const InputStyled = styled.input`
padding-left:15px;
padding-right:15px;
padding-top:10px;
padding-bottom:10px;
font-size:24px;
border-width: 2px;
  border-radius:10px;
  border-style: solid;
  border-color: #000000;
margin-bottom:15px;
`;
const SelectStyled = styled.select`
padding-left:15px;
padding-right:15px;
padding-top:10px;
padding-bottom:10px;
font-size:24px;
border-width: 2px;
  border-radius:10px;
  border-style: solid;
  border-color: #000000;
margin-bottom:15px;
`;
const InputTextAreaStyled = styled.textarea`
padding-left:15px;
padding-right:15px;

padding-bottom:10px;
font-size:24px;
border-width: 2px;
  border-radius:10px;
  border-style: solid;
  border-color: #000000;
height:200px;
margin-bottom:15px;
`;
const InputcheckboxStyled = styled.input`
height:50px;
weight:50px
`;
return (
  <CardStyled name="compose">
    <div className="d-flex flex-column">
      <h1 className="text-decoration-underline mb-3">Self Nominate</h1>
      <h2>Profile picture </h2>
      <ProfilePictureBtn>
        <div className="d-flex flex-column text-center">
          <ProfileImgStyled
            alt="pic"
            src={`https://emerald-related-swordtail-341.mypinata.cloud/ipfs/Qmec8DMTcVg6R8K9kDKTqnXFS4C8tbT8ggNgsLy2d8fb6o?_gl=1*1htydsu*rs_ga*YTcxZDg1OTgtZTYyOC00M2U2LWE4MTctNzUzMDRkMjA3ZWVl*rs_ga_5RMPXG14TE*MTY4NjcwMDM0OC4yLjEuMTY4NjcwMDU0NC4yMi4wLjA.`}
          ></ProfileImgStyled>
          <H3text>Select your image for your profile picture</H3text>
        </div>
      </ProfilePictureBtn>
      <h2>Name </h2>
      <InputStyled
        name="Name"
        id="Name"
        type="text"
        placeholder="Nomination name"
      ></InputStyled>
      <h2>Profile </h2>
      <InputStyled
        name="Profile"
        id="Profile"
        type="text"
        placeholder="@Profile"
        className="px-3 py-2 rounded h-10 border-black mb-3"
      ></InputStyled>
      <h2>Plattform </h2>
      <InputTextAreaStyled
        name="Plattform"
        id="Plattform"
        placeholder="Write your plattform"
      ></InputTextAreaStyled>
      <h2 for="house-intended">House intended </h2>
      <SelectStyled
        name="house-intended"
        id="house-intended"
        className="px-3 py-2 rounded h-25 border-black mb-3"
      >
        <option default value="0">
          Select house
        </option>
        <option value="1">Council of Advisors</option>
        <option value="2">House Of Merit</option>
        <option value="3">Transparency Commission</option>
      </SelectStyled>
      <h2>Afiliations </h2>
      <InputTextAreaStyled
        name="Afiliations"
        id="Afiliations"
        placeholder="Write your a resume of it ..."
      ></InputTextAreaStyled>
      <h2>Declaration of transparency </h2>
      <div className="d-flex flex-row gap-4">
        <InputcheckboxStyled
          type="checkbox"
          className="w-5 h-5 mr-4"
        ></InputcheckboxStyled>
        <p className="mt-3">
          {" "}
          I agree the{" "}
          <a className="text-decoration-underline text-black">
            declaration of transparency
          </a>
        </p>
      </div>
      <h2>Tags </h2>
      <InputStyled
        name="Tags"
        id="Afiliations"
        type="text"
        placeholder="#AmazingJob, #ThankYou"
        className="px-3 py-2 rounded h-25 border-black mb-3"
      ></InputStyled>

      <div className="d-flex flex-row container text-center">
        <div className="col align-items-start">
          <button> submit </button>
          <button> cancel </button>
        </div>
      </div>
    </div>
  </CardStyled>
);

