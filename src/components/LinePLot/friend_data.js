function generateRandomData() {
    const data = {};

    // Loop through each hour of the day
    for (let hour = 0; hour <= 24; hour++) {
        const hourString = hour.toString().padStart(2, '0') + ':00';
        if (hour == 0) {
            data['00:00'] = {
                "Friend 1": 0,
                "Friend 2": 0,
                "Friend 3": 0,
                "Friend 4": 0,
                "Friend 5": 0,
                "Friend 6": 0
            };
        }
        else {

            const hourstring_prev = (hour - 1).toString().padStart(2, '0') + ':00';
            // Generate random values for each friend
            const hourData = {};
            for (let friend = 1; friend <= 6; friend++) {
                const friendName = 'Friend ' + friend;
                const randomValue = Math.floor(Math.random() * 1000); // Generate random value between 0 and 9999
                const val = data[hourstring_prev][friendName] + randomValue;
                hourData[friendName] = val;
            }
            // Assign the hour's data to the main object
            data[hourString] = hourData;
        }
    }

    return data;
}

// Example usage:
const frienddata = generateRandomData();

export default frienddata;