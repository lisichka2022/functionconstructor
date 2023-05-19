'use strict'

void function () {
const form = document.getElementById('form');
form.addEventListener('submit',event=>{
    event.preventDefault();
    const { target } = event;
        const inputs = target.querySelectorAll('input, select, textarea');
        const data = Array.from(inputs).reduce((acc, item) => {
            acc[item.name] = item.value;
            return acc;
        },{})
        localStorage.setItem(DATA_KEY, JSON.stringify(data))
        let keyHistory = localStorage.getItem(HISTORY_KEY);
        if (!keyHistory) {
            localStorage.setItem(HISTORY_KEY, JSON.stringify([data]));
            return;
        }
        keyHistory = JSON.parse(keyHistory);
        keyHistory.push(data);
        localStorage.setItem(HISTORY_KEY, JSON.stringify(keyHistory));  }
        )
        document.addEventListener('DOMContentLoaded', () => {
            let data = localStorage.getItem(DATA_KEY);
    
            if (!data){
                return;
            }
            data = JSON.parse(data);
            const inputs = form.querySelectorAll('input, select, textarea');
            inputs.forEach((item) => {
                item.value = data[item.name];
            });
    
    
        });
    
    
        
    }()
