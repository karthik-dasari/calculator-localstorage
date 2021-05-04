function calculate()
{
    let op1 = document.getElementById('op1').value;
    let op2 = document.getElementById('op2').value;
    let op = document.getElementById('op').value;
    
    if((op1=="1" || op1=="2" || op1=="3" || op1=="4" || op1=="5" || op1=="6" || op1=="7" || op1=="8" || op1=="9" || op1=="0") && (op2=="1" || op2=="2" || op2=="3" || op2=="4" || op2=="5" || op2=="6" || op2=="7" || op2=="8" || op2=="9" || op2=="0"))
    {
        op1=Number(op1);
        op2=Number(op2);

        var ans,ans1;

        let root = document.getElementById('result');
            while (root.firstChild) {
                root.removeChild(root.firstChild);
            }
        
        if(op=="+")
        ans=op1+op2;
        else if(op=="-")
        ans=op1-op2;
        else if(op=="*")
        ans=op1*op2;
        else if(op=="/")
        ans=op1/op2;
        else if(op=="<")
        ans=op1<op2;
        else if(op==">")
        ans=op1>op2;
        else if(op=="<=")
        ans=op1<=op2;
        else if(op==">=")
        ans=op1>=op2;
        else if(op=="==")
        ans=op1==op2;
        else if(op=="|")
        {
            if((op1==1 || op1==2 || op1==3 || op1==4 || op1==5 || op1==6 || op1==7 || op1==8 || op1==9 || op1==0) && (op2==1 || op2==2 || op2==3 || op2==4 || op2==5 || op2==6 || op2==7 || op2==8 || op2==9 || op2==0))
            ans=op1|op2;
            else
            {
                alert("Enter only non-decimal intergers for '|' operation.");
                return;
            }
        }
        else if(op=="&")
        {
            if((op1==1 || op1==2 || op1==3 || op1==4 || op1==5 || op1==6 || op1==7 || op1==8 || op1==9 || op1==0) && (op2==1 || op2==2 || op2==3 || op2==4 || op2==5 || op2==6 || op2==7 || op2==8 || op2==9 || op2==0))
            ans=op1&op2;
            else
            {
                alert("Enter only non-decimal intergers for '&' operation.");
                return;
            }
        }
        else if(op=="^")
        {
            if((op1==1 || op1==2 || op1==3 || op1==4 || op1==5 || op1==6 || op1==7 || op1==8 || op1==9 || op1==0) && (op2==1 || op2==2 || op2==3 || op2==4 || op2==5 || op2==6 || op2==7 || op2==8 || op2==9 || op2==0))
            ans=op1^op2;
            else
            {
                alert("Enter only non-decimal intergers for '^' operation.");
                return;
            }
        }
        else if(op=="%")
        ans=op1%op2;
        else if(op=="~")
        {
            if((op1==1 || op1==2 || op1==3 || op1==4 || op1==5 || op1==6 || op1==7 || op1==8 || op1==9 || op1==0) && (op2==1 || op2==2 || op2==3 || op2==4 || op2==5 || op2==6 || op2==7 || op2==8 || op2==9 || op2==0))
            {
                ans=~op1;
                ans1=~op2;
            }
            else
            {
                alert("Enter only non-decimal intergers for '~' operation.");
                return;
            }
        }
        let ul = document.getElementById('result');
        let p1 = document.createElement('p');
        p1.innerHTML = (`<p><strong>Result:</strong>${ans}</p>`)
        if(ans1)
        p1.innerHTML +=(`<p><strong>Result:</strong>${ans1}</p>`)
        ul.appendChild(p1);
        if(op!="~")
        localStorage.setItem(String(op1)+op+String(op2),String(op1)+op+String(op2)+"="+ans);
        else
        {
            localStorage.setItem(op+String(op1),op+String(op1)+"="+ans);
            localStorage.setItem(op+String(op2),op+String(op2)+"="+ans1);
        }
        updatedhistory();
    }
    else
    {
        alert("Enter only interger values.");
        return;
    }
}

function updatedhistory(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', "", true);

    xhr.onload = function() {
        let root = document.getElementById('updatedhistory');
        while (root.firstChild) {
            root.removeChild(root.firstChild);
        }
        let ul = document.getElementById('updatedhistory');

        for(let i=0;i<localStorage.length;i++)
        {
            let key = localStorage.key(i);
            let value=localStorage.getItem(key);
            let li = document.createElement('li');
            li.classList.add('list-group-item');
            li.id=key+"li";
            li.innerHTML= (`<button type="button" id="${key}" onclick ="return liClick(this);" class="btn btn-light">${value}</button>`);
            ul.appendChild(li);
        }
    }
    xhr.send();
}

function liClick(obj) {
    let idli=$(obj).attr('id');
    if(confirm('Are you sure to remove? '+idli))
    {
        localStorage.removeItem(idli);

        updatedhistory();
    }
}

updatedhistory();