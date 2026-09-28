# Peer-to-peer electricity trading in India

## Pilot and regulatory scan for kWh Electric

**Research date:** 27 July 2026  
**Purpose:** Establish what has actually been demonstrated in India, what is now permitted, and where an OEM-neutral battery control layer can create a defensible business.

## Executive readout

1. **India has moved beyond blockchain demonstrations into regulated, bill-settled pilots.** The sequence is Lucknow (2020), Tata Power-DDL in Delhi (2021), CESC Kolkata (2022), state rules from 2023 onward, and an interstate India Energy Stack (IES) pilot in 2026.
2. **P2P trading is not physical delivery from one house to another.** The grid remains operated by the DISCOM. A platform matches contractual kWh; the DISCOM's smart-meter data verifies delivery and the DISCOM bill settles the trade.
3. **The DISCOM remains central.** Under the Uttar Pradesh and Delhi frameworks, it verifies eligibility, exposes meter data, checks the network, performs or supervises billing and settlement, and retains the customer relationship. A startup cannot safely assume it can bypass the licensed utility.
4. **Solar surplus is the regulatory starting point.** Uttar Pradesh and Karnataka rules are framed around rooftop solar. Delhi goes further: its 2024 guidelines expressly include a BESS, but only when charged through a renewable energy system.
5. **The battery opportunity is operational, not merely financial.** A battery can time-shift solar, reduce under-injection, make a day-ahead offer more dependable, and provide a controllable block of capacity. This requires BMS/inverter integration, SoC/SoH forecasting, renewable provenance, dispatch controls and meter reconciliation—the part the trading applications do not solve.
6. **Do not build the thesis around blockchain.** Delhi allows blockchain *or any other technology*. IES is moving the market toward open specifications, verifiable credentials, consented data exchange and interoperable APIs.
7. **Do not build kWh Electric as only another consumer trading app.** PVVNL's current IES pilot page lists eleven authorised trading service providers. The stronger wedge is an OEM-neutral, IES-ready device and control layer that works underneath multiple trading platforms.
8. **The regulated transaction fee is too small to fund battery infrastructure by itself.** The 2026 Delhi pilot permits ₹0.42/kWh inclusive of GST, split ₹0.21/kWh each between buyer and seller. Even a 9.1 kWh battery trading a full cycle on 300 days creates only 2,730 kWh/year, or about ₹1,147/year of total platform fee before it is shared. kWh Electric needs OEM/device revenue and recurring orchestration revenue, with P2P as one value stream in a broader battery stack.

## What has actually been piloted

| Date | Place and parties | What was tested | Evidence and scale | What it proves | Evidence quality |
|---|---|---|---|---|---|
| Nov 2019 | Dwarka, Delhi — BRPL + Powerledger | P2P trading across existing rooftop-solar infrastructure | A trial among a selected group of solar consumers was announced. Public outcome data was not found in this pass. | Early DISCOM interest; not enough evidence to use as a commercial proof point. | Announcement only |
| Dec 2020 | Lucknow — UPPCL/MVVNL + UPNEDA + ISGF + Powerledger; Abajyon integrated billing | Blockchain-enabled rooftop-solar trading and utility-billing integration | 12 participants: 9 rooftop-solar prosumers and 3 net buyers. Powerledger later reported the market buy price as 43% below retail tariff. UPERC's FY2020-21 tariff order recorded successful completion and asked for more projects, including storage. | Technical feasibility, consumer matching and the route from pilot to regulation. | Executed pilot; outcome details mostly vendor/ISGF reported |
| Nov 2020–Jul 2021 | North Delhi — Tata Power-DDL + Tata Power group + ISGF + Powerledger | Multiple trading logics, dynamic pricing, near-time accounting and recommendations to DERC | Launch cohort: 65 prosumers + 75 consumer sites, more than 2 MW of solar, targeting roughly 150 sites. A later industry report says 165,565 kWh were sold by end-July 2021, earning prosumers ₹1.2 million. Later case-study participant counts differ, suggesting phases or filtered cohorts. | A live P2P program can operate inside a major urban DISCOM territory and produce participant revenue. | Strong utility announcement; public counts need reconciliation |
| 2022 | Kolkata — CESC + ISGF + Powerledger | Fixed, dynamic and preference-based trades as an alternative to net metering/feed-in tariffs | 1,001 participants: 213 prosumers + 788 consumers, over four months. Reported average consumer rate reduction: 10%; reported cohort-level benefits included consumer, prosumer and DISCOM savings. | P2P can be tested at four-digit participant scale and can benefit the DISCOM rather than simply erode its revenue. | Large pilot, but published energy-volume and savings labels are internally inconsistent |
| 2026 | Auroville, Tamil Nadu — research/community pilot | Private Ethereum/Proof-of-Authority platform, smart-meter APIs, day-ahead trading and automated standing instructions | Four real prosumers plus four dummy prosumers. | Useful proof of automated bidding and a community-grid implementation; not evidence of a regulated commercial market. | Peer-reviewed field/research pilot |
| Feb 2026 onward | Delhi–Uttar Pradesh — TPDDL + BRPL + PVVNL under REC/IES | Interstate P2P using common specifications, verifiable credentials, consented data, platform interoperability, smart meters and DISCOM billing | Regulatory orders approved a pilot for up to six months. TPDDL's FY2026 annual report says 41 TPDDL customers had been onboarded and 31 transactions completed. PVVNL currently lists eleven authorised trading-service providers. | The market is shifting from one proprietary platform to interoperable multi-app infrastructure, and from intra-DISCOM to interstate settlement. | Current regulated live pilot |

### Important data cautions

- The CESC/Powerledger page reports **742.53 GWh** traded across four months. IEEFA/JMK reproduces **742,530 MWh**, while the scale and context suggest a possible unit-label error (potentially 742,530 kWh / 742.53 MWh). Do not put this volume in an external document until the underlying CESC/ISGF report is obtained.
- CESC savings are described as “average monthly savings for consumers/prosumers,” but the magnitudes appear to be portfolio totals, not savings per participant. Treat them as reported cohort-level values unless the original model confirms otherwise.
- Tata Power-DDL's launch announcement describes 140 active sites and an eventual ~150; later case-study material uses a 117-customer analytical cohort with categories that do not sum cleanly. Use “~150-site trial, with cohorts varying by phase” externally.
- Vendor case studies are useful evidence but should not be treated as independent impact evaluation.

## How the Indian operating model works

1. A prosumer has an eligible rooftop renewable system and, where permitted, a renewable-charged battery.
2. The participant obtains DISCOM approval and has a ToD-capable or smart import/export meter.
3. A service provider or DISCOM platform accepts buy and sell preferences for specified time blocks.
4. The platform matches a buyer and seller at a mutually agreed price.
5. The physical electricity continues to flow through the distribution network; it is not routed peer-to-peer.
6. The DISCOM meter/MDM supplies time-block data. The platform reconciles scheduled and actual injection/drawl.
7. The trade, platform charge, deviations and residual grid supply are settled through the DISCOM billing system.

This makes P2P a **contracting, measurement and settlement overlay on a regulated distribution grid**, not a replacement for the grid.

## Regulatory position by market

### Uttar Pradesh — 2023 guidelines

- Applies to rooftop-solar sellers registered under the state's gross/net-metering framework and buyers registered with the DISCOM and service provider.
- The service provider registers with UPPCL/the relevant distribution licensee, initially for three years.
- Participants require post-paid smart meters; the service provider uses DISCOM MDM data for billing and reconciliation.
- Day-ahead schedules are due by 17:00 on D-1; intraday schedules are allowed at least four time blocks before delivery.
- Price is mutually agreed. The published transaction charge is ₹0.42/kWh inclusive of GST, split ₹0.21/kWh each between prosumer and consumer.
- The DISCOM raises the bill. Under-injection and under-drawl have settlement consequences; excess injection falls back to the participant's gross/net/feed-in arrangement.
- The rules make the service-provider role real, but they are solar-centric and do not create a general right to charge a battery from the grid and resell that electricity.

### Delhi — 2024 guidelines and 2026 pilot orders

- Eligible consumers/prosumers must be within the relevant DISCOM framework, with sanctioned load/contract demand up to 200 kW or equivalent kVA.
- Renewable-system capacity can be up to 500% of sanctioned load, subject to network review.
- A **BESS charged through a renewable energy system** is expressly included. This is the clearest current regulatory doorway for the kWh Electric concept.
- Participants need a ToD-compliant or smart meter. The service provider uses the DISCOM meter data for billing and schedule-versus-actual reconciliation.
- Participants cannot simultaneously take P2P, group-net-metering and virtual-net-metering benefits; switching is limited.
- The 2024 rule uses eight-time-block advance scheduling, dynamic mutually agreed pricing and DISCOM billing.
- The 2024 framework set wheeling, cross-subsidy and additional surcharges at nil within scope and exempted qualifying systems from wheeling, banking, cross-subsidy and other charges through 31 March 2027 unless changed by order.
- DERC's February 2026 orders permitted intra-DISCOM, intra-state and interstate pilots for up to six months; approved a ₹0.42/kWh total transaction fee split equally between buyer and seller; rejected wheeling charges on the Delhi side; and lifted the 20% CUF transaction cap for the pilot.
- Settlement remains within the DISCOM billing system. The regulator explicitly rejected a design in which peers settle independently outside it.

### Karnataka — 2024 regulations

- Applies to registered **domestic** consumers and domestic rooftop-solar prosumers using net or gross metering.
- Permits a service-provider platform using blockchain or another technology.
- Requires post-paid smart or ToD-compliant meters and reconciliation against DISCOM MDM data.
- This is a legitimate second-state expansion option, but the participant class is narrower than Delhi and the rule is framed around rooftop solar rather than batteries.

### Kerala and other states

- ISGF material reports Kerala joining Uttar Pradesh, Delhi and Karnataka with P2P provisions in its 2025 renewable-energy regulations. The exact final operational rules, charges and commencement mechanics should be verified directly before being used in the business model.
- Forum of Regulators model work points toward broader state adoption, but a model provision is not the same as an operating market.

## The 2026 India Energy Stack shift

IES changes the strategic landscape more than another blockchain pilot would:

- REC's EOI required trading providers to integrate with utility MDM, RMS, ERP and billing systems using open APIs, webhooks or secure files.
- The pilot tests consent-based data exchange, standard payloads, auditability and interoperability rather than one vendor's closed ledger.
- PVVNL issues a verifiable credential proving that a participant is a valid, metered customer without exposing unnecessary customer data to every app.
- PVVNL's live page offers multiple approved trading applications, while the DISCOM remains the verifier, network operator and biller.
- Current and planned IES utility pilots include Delhi, Uttar Pradesh, Gujarat, Andhra Pradesh and Mumbai.

**Strategic consequence:** marketplace software is becoming contestable and potentially commoditised. Reliable control and verification of physical DERs remains fragmented by OEM, protocol, inverter and BMS.

## Implications for kWh Electric

### Recommended category

**kWh Electric should be the OEM-neutral battery participation layer for regulated energy markets—not the electricity exchange.**

The product would sit between a battery/BMS/inverter and any DISCOM-approved trading or flexibility platform:

- discover and normalise battery, inverter, meter and site capabilities;
- create a verified device identity and permission model;
- forecast available renewable-charged energy, SoC, SoH and safe power limits;
- maintain renewable provenance so grid-charged energy is not incorrectly offered where prohibited;
- convert a matched market schedule into a safe local dispatch plan;
- enforce owner-reserved backup, warranty, thermal and cycle-life constraints;
- record commands, acknowledgements, telemetry and exceptions for audit;
- reconcile device telemetry with the DISCOM boundary meter;
- expose one stable API/IES adapter to trading apps, DISCOMs and aggregators.

### Why batteries matter to P2P

The current solar-only pilots expose the exact weaknesses storage can fix:

- solar surplus is concentrated in midday while valuable demand often occurs later;
- day-ahead sellers can under-inject due to weather and incur a settlement liability;
- buyers and sellers otherwise need repeated manual bids;
- DISCOMs need controllable, observable assets rather than an accounting ledger alone;
- a battery can turn intermittent excess into a scheduled, shaped block of renewable energy.

### What kWh must not claim yet

- Do not claim that any battery may arbitrage grid electricity into a P2P market. Delhi's express provision is for BESS charged through renewable energy.
- Do not imply that blockchain directs physical power or removes the DISCOM.
- Do not claim nationwide permission. Electricity distribution and retail rules remain state- and licensee-specific.
- Do not base the economics only on ₹/kWh trading fees or energy spreads. Battery degradation, round-trip losses, reserved backup and low household throughput can overwhelm them.
- Do not market measured savings from the Kolkata pilot until the units and denominators are reconciled.

## Recommended beachhead pilot

**Market:** one Delhi DISCOM territory under the DERC P2P framework.  
**Partners:** one home/C&I BESS OEM, one rooftop-solar installer or OEM, one authorised IES trading provider, and TPDDL or BRPL.  
**Cohort:** 25–50 solar-plus-storage sites, with a matched buyer pool.  
**Role of kWh:** device onboarding, renewable-energy provenance, forecast, schedule-to-dispatch execution, owner safeguards and audit/reconciliation API.  
**Do not build initially:** a standalone consumer exchange, token, wallet or proprietary blockchain.

### Pilot success measures

- percentage of heterogeneous battery models integrated without custom cloud-to-cloud work;
- forecast error for available renewable-charged energy;
- schedule fulfilment and under-injection reduction versus solar-only baseline;
- incremental traded kWh shifted outside solar hours;
- participant gross value, battery degradation cost and net value;
- dispatch acknowledgement latency and successful control rate;
- reconciliation variance between gateway telemetry and DISCOM meter;
- opt-out, backup-reserve and safety-constraint compliance;
- DISCOM value from peak reduction, local balancing or avoided procurement—not only participant savings.

## Commercial conclusions to carry into the internal business model

1. **Sell enablement, not electrons.** kWh should charge for connecting, qualifying and operating a battery in regulated programs.
2. **Use a three-sided distribution model.** OEMs embed or bundle kWh; trading providers consume its API; DISCOMs/aggregators approve and rely on its controls and audit trail.
3. **Use blended revenue.** Hardware or embedded licence + recurring device/site orchestration + integration/support + a modest performance or market-revenue share where regulation permits.
4. **Treat P2P as one application in a revenue stack.** The same connected battery should support solar self-consumption, backup reserve, ToD optimisation, P2P delivery, demand response and future VPP/grid services under one control hierarchy.
5. **Lead with OEM value.** “P2P-ready / IES-ready” can improve battery differentiation and attach recurring services without requiring the OEM to build every DISCOM and trading-platform integration.
6. **Preserve platform neutrality.** The 2026 pilot already has multiple trading apps. kWh becomes more valuable if every authorised provider can control the same OEM-diverse fleet through one permissioned interface.

## Source register

### Primary regulatory and utility sources

- [UPERC Guidelines for Peer-to-Peer Solar Energy Transaction through Blockchain Platform (2023)](https://uperc.org/App_File/P2P-Guidelines_UPERC-pdf416202393822PM.pdf)
- [DERC Peer-to-Peer Energy Transaction Guidelines, 2024](https://derc.gov.in/sites/default/files/DERC%20Peer%20to%20Peer%20Energy%20Transaction%20Guidelines%202024%20-%2024.06.2024.pdf)
- [DERC Order in Petition No. 02/2026 — TPDDL P2P pilot](https://www.derc.gov.in/sites/default/files/Order%20in%20Petition%20No.%2002_2026_P2P.pdf)
- [DERC Order in Petition No. 06/2026 — BRPL P2P pilot](https://www.derc.gov.in/sites/default/files/Order%20in%20Petition%20No.%2006_2026.pdf)
- [Tata Power-DDL 2021 live P2P pilot announcement](https://www.tatapower-ddl.com/pr-details/199/1658486/tata-power-ddl-rolls-out-live-peer-to-peer-%28p2p%29-solar-energy-trading%2C-a-first-of-its-kind-pilot-project-in-delhi)
- [Tata Power-DDL DER integration page](https://www.tatapower-ddl.com/corporate/smart-grid-index/DER)
- [Tata Power-DDL current P2P participation page](https://www.tatapower-ddl.com/solar-rooftop/p-to-p-trading)
- [PVVNL current P2P Energy Trading pilot page and authorised apps](https://www.pvvnl.org/P2P-Energy-Trading)
- [REC IES expression of interest for P2P trading providers](https://recindia.nic.in/ies-expression-of-interest)
- [Ministry of Power/PIB: IES pilot utilities and FY2026-27 demonstration timeline](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2236992&lang=2&reg=3)

### Pilot and analytical sources

- [Powerledger: Uttar Pradesh 2020 pilot announcement](https://powerledger.io/media/uttar-pradesh-power-corporation-limited-launches-first-p2p-solar-power-trading-in-south-asia/)
- [Powerledger: Uttar Pradesh case study](https://powerledger.io/clients/uttar-pradesh-government-india/)
- [Powerledger: CESC/ISGF case study](https://powerledger.io/clients/calcutta-electricity-supply-corporation-isgf-india/)
- [IEEFA/JMK: Rooftop Solar Commercial & Industrial Market, including CESC case study (2023)](https://ieefa.org/sites/default/files/2023-08/IEEFA_JMK_Rooftop%20Solar%20Commercial%20and%20Industrial%20Market_August%202023.pdf)
- [ESMAP/ISGF: Insights from P2P Trading of Green Energy on Blockchain Platforms](https://www.esmap.org/Insights_from_P2P_Trading_of_Green_Energy_on_Blockchain_Platforms)
- [Renewable Watch: Tata Power-DDL pilot outcome summary](https://renewablewatch.in/2022/01/20/blockchain-use-case/)
- [The Electricity Journal: A scalable P2P platform and Auroville pilot (2026)](https://www.sciencedirect.com/science/article/pii/S1040619026000333)

## Next research required before drafting the two documents

1. Map Indian stationary-battery OEMs and products: Ola Shakti, Tata/Agratas or Tata Power offerings, Exide, Amara Raja, Loom Solar and relevant C&I integrators.
2. Verify which products expose local CAN/Modbus or cloud APIs, warranty cycle limits, grid-forming/export capability and certifications.
3. Build the customer-value model by battery size, solar size, tariff, usable cycles, round-trip efficiency, backup reserve and P2P spread.
4. Interview or obtain primary documents from one DISCOM, one authorised trading service provider and one battery OEM to validate willingness to pay and responsibility boundaries.
5. Confirm the final Kerala operational rules and any live Karnataka pilots.
6. Obtain the original CESC/ISGF result report and reconcile its traded-energy and savings units before using those figures externally.
