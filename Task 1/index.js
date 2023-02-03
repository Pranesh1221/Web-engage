document.getElementById(
  "countryCode"
).innerHTML = ` <option data-countryCode="IN" value="91" selected>+91</option>
                  <option data-countryCode="BD" value="880">+880</option>
                  <option data-countryCode="BB" value="1246">+1246</option>
                  <option data-countryCode="BY" value="375">+375</option>
                  <option data-countryCode="BE" value="32">+32</option>
                  <option data-countryCode="BZ" value="501">+501</option>
                  <option data-countryCode="BJ" value="229">+229</option>
                  <option data-countryCode="GB" value="47">+47</option>
                  <option data-countryCode="US" value="44">+44</option>
                  <option data-countryCode="DZ" value="213">+213</option>
                  <option data-countryCode="AD" value="376">+376</option>
                  <option data-countryCode="BT" value="975">+975</option>
                  <option data-countryCode="BO" value="591">+591</option>
                  <option data-countryCode="BA" value="387">387</option>
                  <option data-countryCode="BW" value="267">+267</option>
                  <option data-countryCode="BR" value="55">+55</option>
                  <option data-countryCode="BN" value="673">+673</option>
                  <option data-countryCode="BG" value="359">+359</option>
                  <option data-countryCode="BF" value="226">+226</option>
                  <option data-countryCode="BI" value="257">+257</option>
                  <option data-countryCode="KH" value="855">+855</option>
                  <option data-countryCode="CM" value="237">+237</option>
                  <option data-countryCode="CA" value="1">Ca+1</option>
                  <option data-countryCode="CV" value="238">+238</option>
                  <option data-countryCode="KY" value="1345">+1345</option>
                  <option data-countryCode="CF" value="236">+236</option>
                  <option data-countryCode="CL" value="56">+56</option>
                  <option data-countryCode="CN" value="86">+86</option>
                  <option data-countryCode="CO" value="57">+57</option>
                  <option data-countryCode="KM" value="269">+269</option>
                  <option data-countryCode="CG" value="242">+242</option>
                  <option data-countryCode="AO" value="244">+244</option>
                  <option data-countryCode="AI" value="1264">+1264</option>
                  <option data-countryCode="AG" value="1268">+1268</option>
                  <option data-countryCode="AR" value="54">+54</option>
                  <option data-countryCode="AM" value="374">+374</option>
                  <option data-countryCode="AW" value="297">+297</option>
                  <option data-countryCode="AU" value="61">+61</option>
                  <option data-countryCode="AT" value="43">+43</option>
                  <option data-countryCode="AZ" value="994">+994</option>
                  <option data-countryCode="BS" value="1242">+1242</option>
                  <option data-countryCode="BH" value="973">+973</option>
                  <option data-countryCode="CK" value="682">+682</option>
                  <option data-countryCode="CR" value="506">+506</option>
                  <option data-countryCode="HR" value="385">+385</option>
                  <option data-countryCode="CU" value="53">+53</option>
                  <option data-countryCode="CY" value="90392">+90392</option>
                  <option data-countryCode="CY" value="357">+357</option>
                  <option data-countryCode="CZ" value="42">+42</option>
                  <option data-countryCode="DK" value="45">+45</option>
                  <option data-countryCode="DJ" value="253">+253</option>
                  <option data-countryCode="DM" value="1809">+1809</option>
                  <option data-countryCode="DO" value="1809">+1809</option>
                  <option data-countryCode="EC" value="593">+593</option>
                  <option data-countryCode="EG" value="20">+20</option>
                  <option data-countryCode="SV" value="503">+503</option>
                  <option data-countryCode="GQ" value="240">+240</option>
                  <option data-countryCode="ER" value="291">+291</option>
                  <option data-countryCode="EE" value="372">+372</option>
                  <option data-countryCode="ET" value="251">+251</option>
                  <option data-countryCode="FK" value="500">+500</option>
                  <option data-countryCode="FO" value="298">+298</option>
                  <option data-countryCode="FJ" value="679">+679</option>
                  <option data-countryCode="FI" value="358">+358</option>`;

const form = document.getElementById("web-engage-form");
const talkToUs = document.getElementById("talk-to-us");
talkToUs.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("emailText").innerHTML = "";
  document.getElementById("mobiletext").innerHTML = "";
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("moblie").value;
  const countryCode = document.getElementById("countryCode").value;
  if (!mobile && !email) {
    document.getElementById("emailText").innerHTML = "Please enter Email";
    document.getElementById("mobiletext").innerHTML = "Please enter Number";
  } else if (!mobile) {
    document.getElementById("mobiletext").innerHTML = "Please enter Number";
  } else if (!email) {
    document.getElementById("emailText").innerHTML = "Please enter Email";
  } else if (!email.includes("@") || !email.includes(".")) {
    document.getElementById("emailText").innerHTML = "Enter Vaild Email";
  } else if (mobile.length > 10 || mobile.length < 10) {
    document.getElementById("mobiletext").innerHTML = "Enter Vaild Number";
  } else {
    let user = {
      email: email,
      mobile: mobile,
      countryCode: countryCode,
    };
    document.getElementById("email").value = "";
    document.getElementById("moblie").value = "";
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "./Detail.html";
  }
});
