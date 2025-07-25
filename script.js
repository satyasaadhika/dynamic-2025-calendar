    const holidays = {
      '2025-01-26': 'Republic Day 🇮🇳',
      '2025-01-06': 'Guru Govind Jayanti',
      '2025-01-14': 'Makar Sankranti',
      '2025-02-02': 'Vasant Panchami',  
      '2025-02-12': 'Guru Ravidas Jayanti',
      '2025-02-19': 'Shivaji Jayanti', 
      '2025-02-26': 'Maha Shivaratri',
      '2025-03-14': 'Holi',   
      '2025-04-10': 'Mahavir Jayanti',
      '2025-04-14': 'Ambedkar Jayanti',
      '2025-05-26': 'Buddha Purnima',
      '2025-07-06': 'Muharram',    
      '2025-08-09': 'Raksha Bandhan',
      '2025-01-16': 'Janmashtami',        
      '2025-08-15': 'Independence Day 🇮🇳',
      '2025-08-27': 'Ganesh Chaturthi',
      '2025-11-05': 'Guru Nanak Jayanti',
      '2025-10-02': 'Gandhi Jayanti ',
      '2025-10-20': 'Diwali ',
      '2025-12-25': 'Christmas '
    };

    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    function generateCalendar(year) {
      const calendar = document.getElementById('calendar');
      months.forEach((month, index) => {
        const monthDiv = document.createElement('div');
        monthDiv.classList.add('month');

        const monthName = document.createElement('div');
        monthName.classList.add('month-name');
        monthName.textContent = month + ' ' + year;

        const weekdays = document.createElement('div');
        weekdays.classList.add('weekdays');
        daysOfWeek.forEach(day => {
          const dayDiv = document.createElement('div');
          dayDiv.textContent = day;
          weekdays.appendChild(dayDiv);
        });

        const days = document.createElement('div');
        days.classList.add('days');

        const firstDay = new Date(year, index, 1).getDay();
        const daysInMonth = new Date(year, index + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
          const empty = document.createElement('div');
          days.appendChild(empty);
        }

        for (let i = 1; i <= daysInMonth; i++) {
          const date = `${year}-${String(index + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
          const dayDiv = document.createElement('div');
          dayDiv.textContent = i;
          if (holidays[date]) {
            dayDiv.classList.add('holiday');
            dayDiv.title = holidays[date];
          }
          days.appendChild(dayDiv);
        }

        monthDiv.appendChild(monthName);
        monthDiv.appendChild(weekdays);
        monthDiv.appendChild(days);
        calendar.appendChild(monthDiv);
      });
    }

    function toggleTheme() {
      document.body.classList.toggle('dark-mode');
    }

    function updateTime() {
      const now = new Date();
      const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
      const time = now.toLocaleTimeString();
      document.getElementById('dateTime').textContent = now.toLocaleDateString('en-IN', options) + ' | ' + time;
    }

    generateCalendar(2025);
    updateTime();
    setInterval(updateTime, 1000);