<template>
  <div class="terms-of-service">
    <h2>{{ pageTitle }}</h2>
    <p>{{ pageContent }}</p>
    <h3>{{ userConductTitle }}</h3>
    <p>{{ userConductContent }}</p>
    <h3>{{ intellectualPropertyTitle }}</h3>
    <p>{{ intellectualPropertyContent }}</p>
    <h3>{{ disclaimerTitle }}</h3>
    <p>{{ disclaimerContent }}</p>
    <h3>{{ liabilityTitle }}</h3>
    <p>{{ liabilityContent }}</p>
    <h3>{{ indemnificationTitle }}</h3>
    <p>{{ indemnificationContent }}</p>
    <h3>{{ terminationTitle }}</h3>
    <p>{{ terminationContent }}</p>
    <h3>{{ governingLawTitle }}</h3>
    <p>{{ governingLawContent }}</p>
    <h3>{{ changesTitle }}</h3>
    <p>{{ changesContent }}</p>
    <h3>{{ contactTitle }}</h3>
    <p>{{ contactContent }}</p>
  </div>
</template>

<script>
export default {
  name: "TermsOfService",
  data() {
    return {
      pageTitle: "General Terms of Service",
      pageContent:
        "These General Terms of Service (“Terms”) govern your use of our website and services (“Services”) provided by OneClick.designs. By using our Services, you agree to be bound by these Terms.",
      userConductTitle: "User Conduct",
      userConductContent:
        "You are solely responsible for your use of our Services and for any content that you create, upload, or share through our Services. You agree not to use our Services for any illegal or unauthorized purpose, and you agree to comply with all applicable laws and regulations. You also agree not to use our Services in a way that could interfere with or disrupt our Services or servers, or that could damage our reputation or goodwill.",
      intellectualPropertyTitle: "Intellectual Property",
      intellectualPropertyContent:
        "All content and materials on our website, including but not limited to text, graphics, logos, images, and software, are the property of OneClick.designs or our partners and are protected by copyright and other intellectual property laws. You may not copy, reproduce, distribute, or display any content or materials without our prior written permission.",
      disclaimerTitle: "Disclaimer of Warranties",
      disclaimerContent:
        "We make no representations or warranties of any kind, express or implied, regarding our Services, including but not limited to the accuracy, completeness, or reliability of any information or content on our website. We do not warrant that our Services will be uninterrupted, error-free, or free from viruses or other harmful components.",
      liabilityTitle: "Limitation of Liability",
      liabilityContent:
        "In no event shall OneClick.designs or its partners be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of our Services, whether based on contract, tort, strict liability, or any other legal theory. Our liability for any damages shall not exceed the amount paid by you for our Services.",
      indemnificationTitle: "Indemnification",
      indemnificationContent:
        "You agree to indemnify and hold OneClick.designs and its partners harmless from any claims, damages, or expenses (including attorneys’ fees) arising out of or in connection with your use of our Services or your violation of these Terms.",
      terminationTitle: "Termination",
      terminationContent:
        "We reserve the right to terminate your access toour Services at any time for any reason without prior notice. These Terms shall survive any termination of your access to our Services.",
      governingLawTitle: "Governing Law",
      governingLawContent:
        "These Terms shall be governed by and construed in accordance with the laws of the State of Ohio, without regard to its conflict of law provisions.",
      changesTitle: "Changes to these Terms",
      changesContent:
        "We reserve the right to modify these Terms at any time without prior notice. Your continued use of our Services after the posting of the modified Terms shall constitute your acceptance of the modified Terms.",
      contactTitle: "Contact Us",
      contactContent:
        "If you have any questions or concerns about these Terms or our Services, please contact us at support@oneclick.designs.",
    };
  },
};
</script>

<style>

.terms-of-service {
  max-width: 800px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.5;
  background-color: black;
  color: white;
}
h2, h3 {
  margin-top: 40px;
  margin-bottom: 20px;
  color: white;
}

.terms-of-service {
  max-width: 800px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.5;
}
h2,
h3 {
  margin-top: 40px;
  margin-bottom: 20px;
}
</style>
