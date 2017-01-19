# ProtocolViz

ProtocolViz is a project to visualize and clarify the triage decisions made in providing civil legal assistance and to show the effects of these decisions with real-life data.  D3, a JavaScript library, can create an interactive flow-chart that can both provide the big-picture view of the triage process and allow us to drill-down to individual decisions and their impact.

## The Need for Understandable Triage in Legal Aid
Millions of low-income Americans face legal issues that threaten their home, family and safety without a lawyer.  Our justice system depends on the adversarial nature of court cases to develop the truth.
### Lack of Needed Legal Aid
One solution (among others like ) is funding organizations to provide legal assistance
### Funding Sources
Many legal aid providers receive funding from the federal government through the Legal Services Corporation.  In order to be help more people, legal aid providers also seek additional funding from foundations, state and local governments
## How ProtocolViz Can Let Us See the Triage

Many different factors determine what funding sources or resources are available to any particular person.
These factors include:
 - Location
 - Demographics/Special Populations
 - Legal Issue/[National Subject Matter Index](https://nsmi.lsntap.org/)
 - Stage of the Legal Issue
 - Referral Source

Many of these factors are essentially the same as the factors identified in [this white paper about a Legal Aid Grants Open Data Standard](https://docs.google.com/document/d/1PQpWjRwO0n_IO-sPOImRhn0x0oBlxRWoCtA1G0UuhnY/pub).  An additional factor has been added regarding the Stage of the Legal Issue.  This factor is included because referrals often depend on whether particular events have occured.  For example, a client who has received a notice to vacate may not be referred to an attorney for representation until an actual eviction case is filed.  In addition, this plan for 100% Access to Justice recognizes that providing assistance that may prevent an eviction case being filed may be more efficient for staff resources and better achieve the goals of the client.   However, determining the Stage of the Legal Issue will be dependent on the particular Legal Issue, and may be difficult to standardize across Legal Issues.

Each of these factors can be complex, with large numbers of variables (such as 32 counties in a service area) and nested variables (such as having multiple courts or cities in a county).

###D3 Visualization

We can use a [treemap](http://bl.ocks.org/ganeshv/6a8e9ada3ab7f2d88022) to visualize the complexity of these factors.  Each of the above-listed factor will have its own treemap.

To visualize what funding sources are available for combinations of factors, we can use a variant of a [sankey diagram](http://bl.ocks.org/d3noob/5028304).

http://docs.openreferral.org/en/latest/reference/

https://accesstojustice.net/2016/12/04/how-to-compare-the-appropriateness-of-potential-atj-indicators/

https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2830918

https://schd.ws/hosted_files/2017tigconference/8c/Open%20Referral%20ILAO%20implementation%20TIG%20presentation%201%252F2017.pdf
