let participantCount = 1;

document.addEventListener("DOMContentLoaded", () => {
   const form = document.querySelector("form");

   const addButton = document.querySelector("#add");
   const participantsFieldset = document.querySelector(".participants");

   addButton.addEventListener("click", () => {
      participantCount++;
      const participantHTML = participantTemplate(participantCount);

      addButton.insertAdjacentHTML("beforebegin", participantHTML);
   });

   form.addEventListener("submit", submitForm);
});

function participantTemplate(count) {
   return `
      <section class="participant${count}">
         <p>Participant ${count}</p>
         <div class="item">
            <label for="fname${count}"> First Name<span>*</span></label>
            <input id="fname${count}" type="text" name="fname${count}" value="" required />
         </div>
         <div class="item activities">
            <label for="activity${count}">Activity #<span>*</span></label>
            <input id="activity${count}" type="text" name="activity${count}" />
         </div>
         <div class="item">
            <label for="fee${count}">Fee ($)<span>*</span></label>
            <input id="fee${count}" type="number" name="fee${count}" />
         </div>
         <div class="item">
            <label for="date${count}">Desired Date <span>*</span></label>
            <input id="date${count}" type="date" name="date${count}" />
         </div>
         <div class="item">
            <p>Grade</p>
            <select>
               <option selected value="" disabled selected></option>
               <option value="1">1st</option>
               <option value="2">2nd</option>
               <option value="3">3rd</option>
               <option value="4">4th</option>
               <option value="5">5th</option>
               <option value="6">6th</option>
               <option value="7">7th</option>
               <option value="8">8th</option>
               <option value="9">9th</option>
               <option value="10">10th</option>
               <option value="11">11th</option>
               <option value="12">12th</option>
            </select>
         </div>
         </section>
      `;
}

function submitForm(event) {
   event.preventDefault();

   const total = totalFees();
   const adultName = document.querySelector("#adult_name").value;

   const summaryElement = document.querySelector("#summary");
   summaryElement.innerHTML = successTemplate({
      name: adultName,
      participants: participantCount,
      totalFees: total
   });

   document.querySelector("form").style.display = "none";
   summaryElement.style.display = "block";
}

function successTemplate(info) {
   return `
      Thank you ${info.name} for registering. You have registered ${info.participants} participants and owe $${info.totalFees} in Fees.
   `;
}

function totalFees() {
   // the selector below lets us grab any element that has an id that begins with "fee"
   let feeElements = document.querySelectorAll("[id^=fee]");
   console.log(feeElements);
   // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
   // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
   // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
   feeElements = [...feeElements];
   // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
   const total = feeElements.reduce((sum, feeElement) => {
   // Remember that the text that was entered into the input element will be found in the .value of the element.
      const fee = Number(feeElement.value);
      return sum + (fee || 0);
   }, 0);
   // once you have your total make sure to return it!
   return total;
}