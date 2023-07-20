document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form values
    var customerName = document.getElementById("name").value;
    var checkInDate = document.getElementById("date").value;
    var totalDays = parseInt(document.getElementById("days").value);
    var totalPersons = parseInt(document.getElementById("persons").value);
    var roomType = document.querySelector(
      'input[name="room"]:checked'
    ).value;
    var amenities = Array.from(
      document.querySelectorAll('#amenities input[type="checkbox"]:checked')
    ).map(function (checkbox) {
      return checkbox.value;
    });
    var advanceAmount = parseInt(
      document.getElementById("advancePayment").value
    );

    // Calculate total room cost
    var roomRate = roomType === "deluxRoom" ? 2500 : 4000;
    var totalRoomCost = roomRate * totalDays;

    // Calculate total amenities cost
    var amenitiesCost = 0;
    amenities.forEach(function (amenity) {
      if (amenity === "AC") {
        amenitiesCost += 1000;
      } else if (amenity === "Locker") {
        amenitiesCost += 300;
      }
    });
    var totalAmenitiesCost = amenitiesCost * totalDays;

   
    // Calculate additional charges for extra persons
    var additionalCharges =
      totalPersons > 2 ? 1000 * (totalPersons - 2) * totalDays : 0;

    // Calculate total cost
    var totalCost = totalRoomCost + totalAmenitiesCost + additionalCharges;

    // Calculate balance amount
    var balance = totalCost - advanceAmount;

    // Display customer information
    document.getElementById("customer-name").textContent = customerName;
    document.getElementById("check-in-date").textContent = checkInDate;
    document.getElementById("total-days").textContent = totalDays;
    document.getElementById("total-persons").textContent = totalPersons;

    
    // Display booking information
    document.getElementById("advance-amount").textContent =
      advanceAmount;
    document.getElementById("total-room-cost").textContent =
      totalRoomCost;
    document.getElementById("total-amenities-cost").textContent =
      totalAmenitiesCost;
    document.getElementById("total-cost").textContent = totalCost;
    document.getElementById("additional-charges").textContent =
      additionalCharges;
    document.getElementById("balance").textContent = balance;
  });