export const storageData = [
    {
      "Service": "Amazon Web Services",
      "Description": "Amazon Web Services offers a range of cloud-based storage and compute services to meet a variety of needs. Consult with Research IT Services at research-it@ucsd.edu for advice on the service that meets your needs and to discuss potential costs.",
      "Example Use": "Making a large dataset available for public download.\nPrivate filesharing with versioning and replication, for a widely distributed team.\n\nStoring data files to be shared among multiple servers doing analysis.\n\nStoring data files to be accessed by a single Amazon EC2 server.",
      "Cost": "Cost dependent on services used. Consult with Research IT Services at research-it@ucsd.edu for advice on the service that meets your needs and to discuss potential costs.",
      "Capacity": "No overall limit (costs incurred).\nNo practical limit to number of files.",
      "Access and Collaboration": "Varies by service selected.",
      "Data Allowed": "Allowed: Public data. Sensitive / moderate risk data.\n\nAllowed with special configuration: FERPA-protected data. Confidential or restricted / high risk data.\n\nAllowed only under auspices of appropriate University offices AND with special configuration: HIPAA-regulated data. Export-Controlled information.",
      "Durability": "Versioning can be configured to protect against human error (costs incurred).",
      "backups": true,
      "Working Data": true,
      "Sharing/publication": true,
      "Long-term preservation/archiving": true,
      "P1": true,
      "P2": true,
      "P3": true,
      "P3 - Export-controlled data": false,
      "P4": false,
      "Other": true
    },
    {
      "Service": "AWS Glacier",
      "Description": "Amazon Glacier is a secure, durable, and extremely low-cost cloud storage service for data archiving and long-term backup. Amazon Glacier provides three options for access to archives, from a few minutes to several hours.",
      "Example Use": "Storing an archival copy of a static dataset and when the actively used, primary copy is stored elsewhere.",
      "Cost": "< $500/TB/Year",
      "Capacity": "5 TB file size limit.\nNo overall limit (costs incurred).\nNo practical limit to number of files",
      "Access and Collaboration": "Extensive control using AWS IAM (Identity and Access Management) and UC San Diego Active Directory users and groups.",
      "Data Allowed": "Allowed: Public data. Sensitive / moderate risk data.\n\nAllowed with special configuration: FERPA-protected data. Confidential or restricted / high risk data. Contact Amazon Web Services Glacier for more information.\n\nNot Allowed: HIPAA-regulated data. Export-Controlled information.",
      "Durability": "Very high barrier to accidental deletion of objects, and Glacier performs regular, systematic data integrity checks.",
      "backups": true,
      "Working Data": false,
      "Sharing/publication": false,
      "Long-term preservation/archiving": true,
      "P1": true,
      "P2": true,
      "P3": false,
      "P3 - Export-controlled data": false,
      "P4": false,
      "Other": false
    },
    {
      "Service": "CTRI Storage",
      "Description": "The Clinical Translational Research Institute (CTRI) helps researchers obtain the education, resources and collaborations necessary to translate discoveries into practice. The Institute is a partnership among the University of California, San Diego, and other local institutions dedicated to improving human health. To achieve this goal requires collaboration between many groups: academia, industry, non-profit agencies, government, and most importantly the community. Any researcher or individual interested in translational research from any group is invited to become a member of the CTRI.",
      "Example Use": "Contact CTRI for more information at ACTRI IT Support:\nctri-support@ucsd.edu",
      "Cost": "$55/TB a Month",
      "Capacity": "Contact CTRI",
      "Access and Collaboration": "Contact CTRI for more information at ACTRI IT Support:\nctri-support@ucsd.edu",
      "Data Allowed": "May include human health data",
      "Durability": "Contact CTRI for more information at ACTRI IT Support:\nctri-support@ucsd.edu",
      "backups": true,
      "Working Data": true,
      "Sharing/publication": false,
      "Long-term preservation/archiving": false,
      "P1": false,
      "P2": false,
      "P3": true,
      "P3 - Export-controlled data": false,
      "P4": true,
      "Other": false
    },
    {
      "Service": "Chronopolis",
      "Description": "Digital preservation is a general term for a set of services with one goal: keeping your data safe so that it can be accessed in the future. Chronopolis is a non-commercial digital preservation network comprised of nonprofit higher education institutions and designed to ensure that your data is available beyond the life of a grant or research project.",
      "Example Use": "Storing archival datasets used in publications or other completed research.",
      "Cost": "",
      "Capacity": "Free for UC San Diego researchers",
      "Access and Collaboration": "No file size or number limit.\n\nOverall data limits determined on a case-by-case basis.",
      "Data Allowed": "Access to deposit tools can be configured for UC San Diego Active Directory users and groups.\n\nDirect access to deposited data is restricted. Requests for data retrieval can usually be processed within three business days.",
      "Durability": "Allowed: Public data. Sensitive / moderate risk data.\n\nNot allowed: FERPA-protected data. Confidential or restricted / high risk data. HIPAA-regulated data. Export-Controlled information. Please contact chronopolis@ucsd.edu for more information.",
      "backups": false,
      "Working Data": false,
      "Sharing/publication": false,
      "Long-term preservation/archiving": true,
      "P1": true,
      "P2": true,
      "P3": false,
      "P3 - Export-controlled data": true,
      "P4": false,
      "Other": false
    },
    {
      "Service": "Code42 CrashPlan",
      "Description": "Protect and manage your institution’s most valuable resource—the data created and stored on devices.\n\nCode42 provides real-time recovery so no matter what happens, you always have access to your data. The beauty of our SaaS platform is that it also offers excellent data visibility for your security team, plus it saves IT a ton of time.",
      "Example Use": "Install the software on a laptop or desktop that has valuable local data on it for a reliable backup and sync.",
      "Cost": "As low as $10 a month, contact vendor.",
      "Capacity": "Contact vendor",
      "Access and Collaboration": "Contact vendor",
      "Data Allowed": "Allowed: Public data. Sensitive / moderate risk data.\n\nNot allowed: FERPA-protected data. Confidential or restricted / high risk data. HIPAA-regulated data. Export-Controlled information.",
      "Durability": "Contact vendor",
      "backups": true,
      "Working Data": false,
      "Sharing/publication": false,
      "Long-term preservation/archiving": false,
      "P1": false,
      "P2": false,
      "P3": false,
      "P3 - Export-controlled data": false,
      "P4": false,
      "Other": false
    },
    {
      "Service": "Consult CTRI",
      "Description": "The Clinical Translational Research Institute (CTRI) helps researchers obtain the education, resources and collaborations necessary to translate discoveries into practice. The Institute is a partnership among the University of California, San Diego, and other local institutions dedicated to improving human health. To achieve this goal requires collaboration between many groups: academia, industry, non-profit agencies, government, and most importantly the community. Any researcher or individual interested in translational research from any group is invited to become a member of the CTRI.",
      "Example Use": "undefined",
      "Cost": "Varies",
      "Capacity": "Varies",
      "Access and Collaboration": "Contact CTRI for more information at ACTRI IT Support:\nctri-support@ucsd.edu",
      "Data Allowed": "Includes human health data",
      "Durability": "Contact CTRI for more information at ACTRI IT Support:\nctri-support@ucsd.edu",
      "backups": false,
      "Working Data": true,
      "Sharing/publication": false,
      "Long-term preservation/archiving": true,
      "P1": false,
      "P2": false,
      "P3": false,
      "P3 - Export-controlled data": false,
      "P4": true,
      "Other": false
    },
    {
      "Service": "Consult Research IT Services",
      "Description": "Reach out to Research IT Services at research-it@ucsd.edu for a personalized consultation.",
      "Example Use": "Don't know where to go, are these options overwhelming? Contact Research IT and they will help point you in the right direction.",
      "Cost": "Free, no recharge.",
      "Capacity": "Varies, consult research IT services",
      "Access and Collaboration": "Varies",
      "Data Allowed": "Varies",
      "Durability": "Varies",
      "backups": true,
      "Working Data": true,
      "Sharing/publication": true,
      "Long-term preservation/archiving": false,
      "P1": true,
      "P2": true,
      "P3": true,
      "P3 - Export-controlled data": true,
      "P4": true,
      "Other": true
    },
    {
      "Service": "Consult local department/division IT",
      "Description": "Ask your department or division IT staff for available options they may provide. Many, but not all, departments/divisions offer solutions tailored to their discipline areas.",
      "Example Use": "Varies",
      "Cost": "Varies",
      "Capacity": "Varies",
      "Access and Collaboration": "Campus only",
      "Data Allowed": "P1 or P2 data",
      "Durability": "Varies",
      "backups": true,
      "Working Data": true,
      "Sharing/publication": true,
      "Long-term preservation/archiving": true,
      "P1": true,
      "P2": true,
      "P3": true,
      "P3 - Export-controlled data": true,
      "P4": true,
      "Other": true
    },
    {
      "Service": "Druva InSync",
      "Description": "Ensuring that your business data is protected is a huge challenge – especially with your data spread across endpoints and cloud applications like Office 365, Google G Suite, Box, and Salesforce. Druva inSync provides a simple approach to protecting, preserving and discovering your data, while reducing costs, risk and complexity.",
      "Example Use": "Protecting local or cloud data.",
      "Cost": "Varies, contact vendor.",
      "Capacity": "Contact vendor",
      "Access and Collaboration": "Contact vendor",
      "Data Allowed": "Allowed: Public data. Sensitive / moderate risk data.\n\nNot allowed: FERPA-protected data. Confidential or restricted / high risk data. HIPAA-regulated data. Export-Controlled information.",
      "Durability": "Contact vendor",
      "backups": true,
      "Working Data": false,
      "Sharing/publication": false,
      "Long-term preservation/archiving": false,
      "P1": false,
      "P2": false,
      "P3": false,
      "P3 - Export-controlled data": false,
      "P4": false,
      "Other": false
    },
    {
      "Service": "GitHub.com",
      "Description": "GitHub Inc. is a web-based hosting service for version control using Git. It is mostly used for computer code. It offers all of the distributed version control and source code management (SCM) functionality of Git as well as adding its own features. It provides access control and several collaboration features such as bug tracking, feature requests, task management, and wikis for every project.",
      "Example Use": "GitHub is best used for open-source projects",
      "Cost": "Free for Open Source development. The cost can vary to include more features <a href>https://github.com/pricing</a>",
      "Capacity": "Limited, code",
      "Access and Collaboration": "Varies depending on which license you choose. GitHub's pricing page has more information <a href>https://github.com/pricing</a>",
      "Data Allowed": "",
      "Durability": "Allowed: Public data. Sensitive / moderate risk data.\n\nNot allowed: FERPA-protected data. Confidential or restricted / high risk data. HIPAA-regulated data. Export-Controlled information.",
      "backups": false,
      "Working Data": true,
      "Sharing/publication": true,
      "Long-term preservation/archiving": false,
      "P1": true,
      "P2": true,
      "P3": false,
      "P3 - Export-controlled data": false,
      "P4": false,
      "Other": false
    },
    {
      "Service": "GitLab.com",
      "Description": "GitLab is the most comprehensive\nAI-powered DevSecOps Platform.",
      "Example Use": "Store code for an experiment or software that you have written. Needs versioning.",
      "Cost": "Free",
      "Capacity": "Limited. Capable for code storage, but not significant file storage.",
      "Access and Collaboration": "GitLab.com supports unlimited private or public repositories.",
      "Data Allowed": "Allowed: Public data. Sensitive / moderate risk data.\n\nNot allowed: FERPA-protected data. Confidential or restricted / high risk data. HIPAA-regulated data. Export-Controlled information.",
      "Durability": "Contact vendor",
      "backups": false,
      "Working Data": true,
      "Sharing/publication": true,
      "Long-term preservation/archiving": false,
      "P1": true,
      "P2": true,
      "P3": false,
      "P3 - Export-controlled data": false,
      "P4": false,
      "Other": false
    },
    {
      "Service": "Globus",
      "Description": "​Globus is a non-profit service for secure, reliable research data management. With Globus, users can move, share, & discover data via a single interface--whether your files live on a supercomputer, lab cluster, tape archive, public cloud or your laptop, you can manage this data from anywhere, using your existing identities, via just a web browser.​ Developers can also use Globus to build applications and gateways leveraging its advanced identity management, single sign-on, search, authorization, and automation capabilities.",
      "Example Use": "Data collected from instruments (e.g., cryoEM, gene sequencers, remote sensors) can be transferred from the data collection point to a centralized storage resource, like SDSC or the cloud. From there, the data can be processed for analysis or shared with external collaborators.",
      "Cost": "UCSD has a subscription that covers all community members, including staff and students. UCSD research projects operating Globus Connect Server endpoints can add them to the subscription to unlock additional features, including guest collections to enable access by external collaborators. Individual researchers can join the UCSD Globus Plus Group to create guest collections on their Globus Connect Personal endpoints. Our subscription also includes connectors for Amazon Web Services S3 cloud storage and Google Drive.\n\n \n\nFor projects handling protected information--Protected Health Information (PHI), Personally Identifiable Information (PII), and controlled-but-unclassified (CUI) data--our subscription covers the Globus High Assurance features, and includes a Business Associate Agreement (BAA). Because Globus Connect endpoints are operated by the data owners (i.e, a user, research project, or data center) there may be substantial additional work to ensure the endpoint is secure.",
      "Capacity": "Globus does not store data, it is a service that provides reliable and secure data transfers between endpoints. The endpoints are operated by users, projects, and data centers, and endpoint capacity is based on the storage it accesses. For example, if you have a Globus Connect Personal endpoint on your laptop, the maximum capacity is the free space on your laptop. However, if you’re using the AWS S3 connector, the limiting factor is probably your budget. There are some limitations in the number of transfers and permissions.",
      "Access and Collaboration": "Data access can be set up for only users on a system, or for sharing using a collaborators’s outside identity (i.e., from another university or ORCiD). These permissions are set on the folder level and managing access can be granted to users through roles.",
      "Data Allowed": "Our subscription covers the Globus High Assurance features, and includes a Business Associate Agreement (BAA). This can be used by projects handling protected information--Protected Health Information (PHI), Personally Identifiable Information (PII), and controlled-but-unclassified (CUI) data. Because Globus Connect endpoints are operated by the data owners (i.e, a user, research project, or data center) there may be substantial additional work to ensure the endpoint is secure.",
      "Durability": "Like capacity, the durability of data accessible via Globus depends on the underlying endpoint and its storage. However, Globus provides several mechanisms to ensure data integrity during and after transfer. The first is the reliability of the transfer. Globus will retry transfers when the source or destination endpoint, or the network between them, suffers an outage. Second, Globus can use checksums to verify the integrity of the transferred files. With the ability to schedule recurring transfers, Globus can also be used as a reliable tool for data replication between systems.",
      "backups": true,
      "Working Data": true,
      "Sharing/publication": true,
      "Long-term preservation/archiving": true,
      "P1": true,
      "P2": true,
      "P3": true,
      "P3 - Export-controlled data": true,
      "P4": true,
      "Other": false
    },
    {
      "Service": "Google Cloud Platform",
      "Description": "Google Cloud Platform (GCP) offers a diverse range of cloud-based storage and compute services. Consult with Research IT Services at research-it@ucsd.edu for advice on services that meets your project's needs and to discuss potential costs.",
      "Example Use": "Making a large dataset available for public download.\n\nPrivate filesharing with versioning and replication, for a widely distributed team.\n\nStoring data files to be shared among multiple servers doing analysis.\n\nStoring data files to be accessed by a single cloud server.",
      "Cost": "Cost vary depending on services used. Consult with Research IT Services at research-it@ucsd.edu for advice on services that meet your project's needs and to discuss potential costs.",
      "Capacity": "No overall limit (costs incurred).\nNo practical limit to number of files.",
      "Access and Collaboration": "Varies by service selected.",
      "Data Allowed": "Allowed: Public data. Sensitive / moderate risk data.\n\nAllowed with special configuration: FERPA-protected data. Confidential or restricted / high risk data.\n\nAllowed only under auspices of appropriate University offices AND with special configuration: HIPAA-regulated data. Export-Controlled information.",
      "Durability": "Versioning can be configured to protect against human error (costs incurred).",
      "backups": true,
      "Working Data": true,
      "Sharing/publication": true,
      "Long-term preservation/archiving": true,
      "P1": true,
      "P2": true,
      "P3": true,
      "P3 - Export-controlled data": false,
      "P4": false,
      "Other": true
    },
    {
      "Service": "Google Drive",
      "Description": "Online file storage and sharing for collaborators in and out of UC San Diego. Set up to sync with your local computer or mobile device for easy access and use.",
      "Example Use": "Online, real-time collaboration with peers on documents and other files as part of the UC San Diego G-Suite services.",
      "Cost": "Free for UC San Diego users",
      "Capacity": "5 TB file size limit.\nOverall limit tbd - pending changes to licensing.\nAPI calls limited.",
      "Access and Collaboration": "Can include non-UC San Diego users. Owner controls sharing options, including edit and view rights; file and folder level controls available.",
      "Data Allowed": "Allowed: Public data. Sensitive / moderate risk data.\n\nNot Allowed: Confidential or restricted / high risk data. FERPA-protected data. HIPAA-regulated data. Export-Controlled information.",
      "Durability": "Automatic file versioning.",
      "backups": true,
      "Working Data": true,
      "Sharing/publication": true,
      "Long-term preservation/archiving": true,
      "P1": true,
      "P2": true,
      "P3": false,
      "P3 - Export-controlled data": false,
      "P4": false,
      "Other": false
    },
    {
      "Service": "Health ITTS for AWS Glacier",
      "Description": "Glacier services provided by Health ITSS",
      "Example Use": "Deep, protected backups",
      "Cost": "Varies, contact Health ITSS",
      "Capacity": "Unlimited",
      "Access and Collaboration": "Minimal, contact Health ITSS for more information",
      "Data Allowed": "May include human health data; contact Health ITSS for more information",
      "Durability": "High",
      "backups": true,
      "Working Data": false,
      "Sharing/publication": false,
      "Long-term preservation/archiving": false,
      "P1": false,
      "P2": false,
      "P3": false,
      "P3 - Export-controlled data": false,
      "P4": true,
      "Other": false
    }
  ]