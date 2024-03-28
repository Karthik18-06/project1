document.addEventListener('DOMContentLoaded', function() {

    const dropdown = document.getElementById('dropdown');
    const icon = document.querySelector('.cartshop'); 

    
    const iconClassMapping = {
        'option1': 'fa-cart-shopping',
        'option2': 'fa-some-other-icon',
        'option3': 'fa-another-icon'
    };

  
    dropdown.addEventListener('change', () => {
        
        const selectedValue = dropdown.value;

       
        const iconClass = iconClassMapping[selectedValue];

        if (iconClass) {
            
            icon.classList.remove('fa-cart-shopping', 'fa-some-other-icon', 'fa-another-icon');
            icon.classList.add(iconClass);
        }
    });
});



