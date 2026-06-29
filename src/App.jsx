import { useEffect, useState } from 'react'
import pano from './assets/images/pano.jpg'
import seated from './assets/images/seated.jpeg'
import rockyStream from './assets/images/rockystream.jpeg'
import hiking from './assets/images/hikingimage.jpeg'
import portfolioPdf from './assets/images/cHunter_GeoE_Portfolio.pdf'
import resumePdf from './assets/images/cHunterCV(Aug2025).pdf'
import shieldFig1 from './assets/figs/shieldfig1.jpg'
import shieldFig2 from './assets/figs/shieldfig2.jpg'
import shieldFig3 from './assets/figs/shieldfig3.jpg'
import mineralFig1 from './assets/figs/mineralfig1.jpg'
import mineralFig2 from './assets/figs/mineralfig2.jpg'
import mineralFig3 from './assets/figs/mineralfig3.jpg'
import vogFig1 from './assets/figs/vogfig1.png'
import vogFig2 from './assets/figs/vogfig2.png'
import vogFig3 from './assets/figs/vogfig3.jpg'
import vogFig4 from './assets/figs/vogfig4.jpg'
import brooksFig1 from './assets/figs/characterfig1.jpg'
import impactFig1 from './assets/figs/impactfig1.jpg'
import impactFig2a from './assets/figs/impactfig2a.png'
import impactFig2b from './assets/figs/impactfig2b.png'
import impactFig2c from './assets/figs/impactfig2c.png'
import impactFig3 from './assets/figs/impactfig3.jpg'

const container = 'mx-auto w-[min(900px,92%)]'
const section = `${container} py-[45px]`
const muted = 'text-[#6a6258]'
const accent = 'text-[#3f5a3f]'
const border = 'border-[#ddd6c9]'
const card = `rounded-md border ${border} bg-white`

const projects = [
  {
    slug: 'shield-vs-strato',
    title: 'Shield vs. Stratovolcanoes: Comparing Hazards of Volcanism in Hawaiʻi and Washington',
    listTitle: 'Shield vs. Stratovolcanoes',
    subtitle: 'Comparing Hazards of Volcanism in Hawaiʻi and Washington',
    meta: [
      ['Course', 'GIS4324 — GIS Analysis of Hazard Vulnerability'],
      ['Instructor', 'Dr. Kevin Ash'],
      ['Date', 'Spring 2025'],
    ],
    sections: [
      {
        title: 'Background',
        paragraphs: [
          `Volcanic hazards vary considerably between volcano types, with shield volcanoes and stratovolcanoes representing the two principal categories. Shield volcanoes, such as Mauna Loa on the Big Island of Hawaiʻi, produce low-viscosity basaltic lavas capable of traveling tens of kilometers, gradually building vast low-sloping structures through frequent eruptions. Their primary hazards are lava flows, vog (volcanic smog), and eruption-related earthquakes. Stratovolcanoes, such as Mount St. Helens in Washington State, are fed by rhyolitic or andesitic magmas of much higher viscosity, which requires substantial pressure to move and produces infrequent but extraordinarily violent explosive eruptions. These events generate a broader range of hazards, including pyroclastic flows, lahars, tephra fall, and large earthquakes, with the potential to disrupt infrastructure at a regional or even global scale.`,
          `This project addresses the question of how the hazards associated with Mauna Loa and Mount St. Helens differ in terms of spatial distribution, frequency, and social vulnerability, and what those differences imply for risk mitigation and emergency planning. The analysis focuses on the 2022 Mauna Loa eruption and the 1980 Mount St. Helens eruption as the primary case studies for each volcano.`,
        ],
      },
      {
        title: 'Data',
        paragraphs: [
          `Several datasets were integrated for this analysis. USGS Lava-Flow Hazard Zone Maps for Hawaii Island, originally from Open-File Report 74-239 (Mullineaux & Peterson, 1974) and reformatted by Wright et al. (1992), classify the island into nine zones from highest (Zone 1) to lowest (Zone 9) hazard based on historical flow coverage and proximity to vents. USGS geospatial data for the November 27–December 10, 2022, Mauna Loa eruption provided polygon shapefiles of active lava-flow margins and fissure vents. Infrastructure zoning data (classifying parcels as Urban, Agricultural, Rural, or Conservation) along with a Native Hawaiian Land dataset, were sourced from the Hawaiʻi State Office of Planning and Sustainable Development.`,
          `For Mount St. Helens, hazard extents (pyroclastic-flow, lahar, and ashfall) were sourced from the USGS Washington Simplified Hazards Map and Open-File Report 95-497 (Wolfe & Pierson, 1995), capturing the spatial footprint of the May 18, 1980, VEI 5 eruption. A post-eruption map from the U.S. Forest Service Pacific Northwest Research Station was georeferenced in ArcGIS Pro, and a KMZ file compiled by photographer Kelly Michals provided the locations of all 57 confirmed fatalities from the 1980 eruption.`,
          `Tract-level population and housing data from the U.S. Census Bureau's American Community Survey 2016–2020 5-year Summary File supported the exposure assessment, while FEMA's National Risk Index (NRI) provided tract-level volcanic hazard risk scores incorporating expected annual loss, social vulnerability, and hazard frequency. A USGS Washington simplified hazard map covering pyroclastic-flow, lahar, and regional lava flow extents for the entire state of Washington was also included for broader context.`,
        ],
      },
      {
        title: 'Methods',
        paragraphs: [
          `Analysis was conducted primarily in ArcGIS Pro. The U.S. Forest Service post-eruption map of the 1980 Mount St. Helens event was georeferenced against a DEM of the Cascade Range to establish accurate spatial positioning of the lateral blast, pyroclastic-flow, and lahar extents. The 57 confirmed fatality locations were then overlaid on this georeferenced map to visualize where lives were lost relative to each hazard zone. All layers were reprojected to NAD 1983 UTM (Zone 4N for Hawaiʻi; Zone 10N for Washington) to ensure consistent spatial referencing across datasets.`,
          `For Mauna Loa, the 2022 eruption lava-flow polygons were overlaid on the Hawaii State infrastructure zoning layer and intersected with the Native Hawaiian Land dataset to assess land-use impacts. The USGS Lava-Flow Hazard Zones (1–9) were added to provide the broader hazard context for the island. A basic population exposure assessment was conducted by clipping 2020 census tract boundaries to each hazard and eruption footprint for both study areas.`,
          `FEMA NRI volcanic hazard scores were extracted for census tracts in both Hawaii and Washington and mapped to allow direct comparison of risk levels between the two states. The combination of hazard extents, population exposure, infrastructure zoning, and NRI scores produced maps illustrating where lava flows, pyroclastic flows, lahars, and ashfall intersect with resident populations and critical infrastructure.`,
        ],
      },
      {
        title: 'Results',
        paragraphs: [
          `The 2022 Mauna Loa eruption produced a lava flow approximately 19 km in length that traveled northeast from the summit rift, crossing the Mauna Loa Weather Observatory access road before stopping 2.8 km short of the Daniel K. Inouye Highway (Saddle Road). The eruption covered approximately 31 km² and was the first by Mauna Loa in 38 years. Although USGS Lava-Flow Hazard Zones 1–3 collectively encompass roughly 22% of Hawaii Island's area, the 2022 flow intersected only conservation-zoned land, with no damage to urban or rural infrastructure. Approximately 45,000 residents, about 23% of the Big Island's population, live within Zones 1–2, along with portions of the Saddle Road, power lines, and larger population centers such as Hilo.`,
          `The May 18, 1980, Mount St. Helens eruption, triggered by a magnitude 5+ earthquake that released a massive flank collapse and lateral blast, was rated VEI 5. Pyroclastic and debris avalanches scoured approximately 57 km² around the crater, while lahars inundated 16 km² of downstream floodplain in the North Fork Toutle and Muddy River valleys. Ashfall blanketed over 57,000 km² across Washington, Oregon, and Idaho, depositing 1 cm or more of ash across roughly 22,000 mi². Approximately 12,000 people reside within the combined pyroclastic-flow and lahar zones, with an additional estimated 650,000 at risk of receiving significant ashfall in a comparable future eruption. Critical transportation infrastructure, including the I-5 corridor, Spirit Lake Highway, and freight rail, falls within high-ashfall zones.`,
          `FEMA NRI volcanic hazard scores further reflect the contrast between the two volcanoes. Census tracts across Hawaii Island score below 50 on the 0–100 NRI scale, placing the island comparatively low in national volcanic risk rankings. Washington tracts within pyroclastic and lahar zones reach scores into the 90s, driven primarily by historic-loss ratios from the 1980 eruption, estimated at $3.3 billion in direct and indirect losses, and by the broad downwind ashfall exposure that extends well beyond the immediate blast zone.`,
        ],
      },
    ],
    figures: [
      [shieldFig1, 'Georeferenced USFS post-eruption map of the May 18, 1980, Mount St. Helens eruption', 'Figure 1: Georeferenced U.S. Forest Service Pacific Northwest Research Station post-eruption map of the May 18, 1980, Mount St. Helens eruption, showing lateral blast, pyroclastic-flow, and lahar disturbance zones against a DEM of the Cascade Range. Red points indicate the locations of all 57 confirmed fatalities.', true],
      [shieldFig2, 'USGS Lava-Flow Hazard Zones and 2022 Mauna Loa eruption footprint', 'Figure 2: USGS Lava-Flow Hazard Zones (Zones 1–9) for Hawaii Island, with Zone 1 representing the highest hazard (above), and the footprint of the November 27–December 10, 2022, Mauna Loa eruption overlaid on Hawaii State infrastructure zoning classes (below).'],
      [shieldFig3, 'FEMA NRI volcanic hazard scores for Hawaii Island and Washington State', 'Figure 3: FEMA National Risk Index (NRI) volcanic hazard scores by census tract for Hawaii Island (left) and Washington State (right), on a 0–100 scale. Hawaii tracts score below 50 throughout; Washington tracts within pyroclastic-flow and lahar zones reach scores into the 90s.'],
    ],
  },
  {
    slug: 'mineral-exploration',
    title: 'Enhancing Mineral Exploration through Remote Sensing and Machine Learning: A Focus on Cobalt and Nickel in New Caledonia',
    listTitle: 'Enhancing Mineral Exploration through Remote Sensing and Machine Learning',
    subtitle: 'A Focus on Cobalt and Nickel in New Caledonia',
    meta: [
      ['Course', 'GIS4037 — Remote Sensing'],
      ['Instructor', 'Dr. Moulay Anwar Sounny-Slitine'],
      ['Date', 'Fall 2024'],
    ],
    sections: [
      {
        title: 'Background',
        paragraphs: [
          `Traditional mineral exploration has historically depended on extensive field surveys and costly drilling operations to locate economically viable deposits. As global demand for renewable energy technologies and electric vehicles has grown rapidly, so too has the need for critical minerals such as cobalt (Co) and nickel (Ni). These two minerals are frequently found together, cobalt occurring at approximately 110 ppm and nickel at 16 mg/kg in ultramafic rock, making their co-location advantageous for exploration. When ultramafic rock weathers it forms laterites, which can contain more concentrated levels of these elements: limonite forms where cobalt concentrations are higher and saprolite where nickel dominates.`,
          `This project investigates whether remote sensing methods, specifically custom spectral indices and a machine learning classification algorithm, can be applied through Google Earth Engine (GEE) to accurately identify Co-Ni deposits and reduce the cost and environmental impact of traditional exploration. The island of New Caledonia was selected as the study area due to its status as a major global contributor to cobalt and nickel supply.`,
        ],
      },
      {
        title: 'Data',
        paragraphs: [
          `The primary source of spectral data was the Sentinel-2 satellite, launched in 2015 by the European Space Agency. Six bands from the Sentinel-2 dataset were used: Blue (B2, ~496 nm), Green (B3, ~560 nm), Red (B4, ~664 nm), Red Edge 3 (B7, ~782 nm), Near-Infrared (B8, ~835 nm), and Shortwave Infrared 2 (B12, ~2202 nm). These bands were sourced via the Earth Engine Data Catalog. Images were filtered to allow no more than 5% cloud cover to limit atmospheric interference. A Normalized Difference Vegetation Index (NDVI) mask was applied to reduce signal contamination from the island's heavy tropical vegetation, which absorbs strongly in the infrared range.`,
          `NASA's Global Digital Elevation Model (DEM) was incorporated to restrict analysis to the topographic zones where mineral-rich laterites and ultramafic soils are most found. Locations of known Co-Ni mining operations across New Caledonia were used both as training data for the machine learning classifier and as a reference against which the accuracy of both methods was evaluated.`,
        ],
      },
      {
        title: 'Methods',
        paragraphs: [
          `Two independent remote sensing methods were developed and then combined. The first method involved the formulation of two custom spectral indices designed to highlight the surface signatures of laterite and ultramafic rock. Both indices were developed iteratively by testing band combinations against reference maps of known Ni-Co mining operations. The two resulting index maps were then averaged into a single combined index map, and the DEM topographic filter was applied to complete the spectral indices output.`,
          `The second method applied supervised classification via a Random Forest (RF) algorithm within Google Earth Engine. Training data were manually compiled by visually selecting representative points for five land-cover classes: forest, development/barren, water, herbaceous, and Cobalt/Nickel. Known mining operation locations were used to populate the Cobalt/Nickel class. Due to memory constraints in Google Earth Engine, equal numbers of points could not always be assigned to each class. Once trained, the RF algorithm produced a classified prediction map across the entire region of interest.`,
          `In the final stage of the project, the machine learning map was overlaid on the spectral indices map, with both maps brought to a common color scheme using red to indicate predicted Co-Ni regions, to create a third composite map that leverages the strengths of both approaches.`,
        ],
        formulas: [
          ['LNDI = (SWIR − RedEdge) / (SWIR + RedEdge)', 'Laterite Normalized Difference Index (LNDI), using Sentinel-2 SWIR (B12, ~2202 nm) and Red Edge (B7, ~782 nm) to highlight clay minerals and iron and aluminum oxides common in lateritic soils.'],
          ['UNDI = (SWIR − NIR) / (SWIR + NIR)', 'Ultramafic Normalized Difference Index (UNDI), using Sentinel-2 SWIR (B12, ~2202 nm) and NIR (B8, ~835 nm) to highlight mineral assemblages characteristic of ultramafic rock and its weathered derivatives.'],
        ],
      },
      {
        title: 'Results',
        paragraphs: [
          `The combined LNDI, UNDI, and DEM spectral index map produced a spatially coherent output that correctly highlighted the locations of most known mining operations across New Caledonia when compared to a true-color image of the island. Some errors were present, most notably along portions of the coastline and in urban areas, likely attributable to those surfaces' interactions with infrared light. Beyond the known mining sites, the map also identified areas where no mining is currently occurring, suggesting the possible presence of Co-Ni deposits not yet under extraction.`,
          `The Random Forest classification map produced similarly useful results. Known mining operation areas were correctly classified in the Cobalt/Nickel category, and the map also predicted additional areas of potential deposits beyond current operations. As with the spectral index output, any newly predicted areas would require field confirmation before extraction activity could be initiated.`,
          `The composite map produced by overlaying the machine learning classification on the spectral indices output combined the predictive strengths of both methods. Regions flagged by only one method became visible in the composite, and areas identified by both appeared as stronger red signals, indicating greater confidence in a Co-Ni prediction. Using spatial correspondence with known mining operations as an accuracy metric, both individual methods and the composite map performed well for the study area, providing positive evidence that remote sensing through spectral indices and machine learning can be a viable and less environmentally invasive tool for critical mineral exploration.`,
        ],
      },
    ],
    figures: [
      [mineralFig1, 'Combined LNDI, UNDI, and DEM spectral index map of New Caledonia alongside true-color Sentinel-2 image', 'Figure 1: Combined LNDI, UNDI, and DEM spectral index map of New Caledonia (left) alongside a true-color Sentinel-2 image (right). Warmer colors indicate higher predicted Co-Ni likelihood; red circles mark known mining operations.', true],
      [mineralFig2, 'Random Forest classification output for New Caledonia alongside true-color Sentinel-2 image', 'Figure 2: Random Forest classification output for New Caledonia (left) alongside a true-color Sentinel-2 image (right). Dark green = forest; green = herbaceous; yellow = development/barren; red = predicted Co-Ni deposit. Red circles mark known mining operations.'],
      [mineralFig3, 'Composite map overlaying Random Forest classification onto spectral indices map', 'Figure 3: Composite map produced by overlaying the Random Forest classification onto the spectral indices map, with red indicating predicted Co-Ni regions. Stronger red signals reflect areas flagged by both methods.'],
    ],
  },
  {
    slug: 'vog-exposure',
    title: 'Vog Exposure and Respiratory Vulnerability in Hawaiʻi',
    listTitle: 'Vog Exposure and Respiratory Vulnerability in Hawaiʻi',
    subtitle: 'Spatial Risk Modeling & Hot-Spot Analysis',
    meta: [
      ['Course', 'GIS4424C — Applications in GIS for Disease Ecology and Zoonoses'],
      ['Instructor', 'Dr. Jason Blackburn'],
      ['Date', 'Fall 2025'],
    ],
    sections: [
      {
        title: 'Background',
        paragraphs: [
          `This project addresses the public-health concern in Hawaiʻi of the uneven spatial impact of volcanic smog, or vog, produced during eruptive activity at Kīlauea. Vog forms when sulfur dioxide (SO₂) and fine particulate matter (PM₂.₅; particles less than 2.5 microns in diameter) released by volcanic activity accumulate and react in the atmosphere, creating air pollution that can aggravate asthma, chronic obstructive pulmonary disease (COPD), and other respiratory illnesses. Because vog exposure varies by location depending on eruption intensity, wind patterns, and distance from the volcano, some communities may face greater health risk than others.`,
          `The objective of this study was to identify where elevated vog exposure and underlying respiratory vulnerability overlap across Hawaiʻi census tracts during an active eruptive period from October 1st to December 1st of 2025, with the broader goal of highlighting communities where public-health preparedness and risk communication may be most needed.`,
        ],
      },
      {
        title: 'Data and Materials',
        paragraphs: [
          `The analysis combines environmental monitoring data with tract-level health data and census geography. Hourly SO₂ and PM₂.₅ measurements for the period from October 1 to December 1 of 2025 were obtained from the Hawaiʻi Department of Health Clean Air Branch in table form, and these station-based observations were used to derive a pollution exposure metric based on the number of hours above high-pollution thresholds.`,
          `Census tracts from 2020 were used as the geographic unit for vulnerability and risk mapping, and tract-level estimates of adult asthma prevalence and adult COPD prevalence from 2017–2022 were compiled from the Hawaiʻi Health Data Warehouse and joined to tract polygons. To support valid spatial analysis, all datasets were projected into NAD 1983 HARN UTM Zone 5N, allowing distance-based tools such as kernel density estimation and nearest-neighbor analysis to operate in consistent map units. This dataset design is appropriate because it links hazard, health vulnerability, and geography into a single analytical framework.`,
        ],
      },
      {
        title: 'Methods',
        paragraphs: [
          `Several GIS and spatial-statistical methods were used to transform raw observations into interpretable patterns of risk. First, kernel density estimation (KDE) was applied to monitoring station counts of hours above high-pollution thresholds to create a continuous vog exposure surface, using a 90 km search radius based on the monitoring network's mean nearest-neighbor distance. Next, zonal statistics were used to summarize the KDE surface by census tract, producing a tract-level measure of relative vog exposure intensity.`,
          `This exposure metric was then standardized with tract-level asthma prevalence and COPD prevalence by converting each variable to z-scores and averaging them into a composite Vog Risk Index. Finally, the project evaluated spatial patterning with Global Moran's I, Local Moran's I (LISA), and Getis-Ord Gi* hot-spot analysis using an 8-nearest-neighbor conceptualization of spatial relationships and false discovery rate correction for the local statistics. This workflow demonstrates analysis and modeling rather than only cartographic display.`,
        ],
      },
      {
        title: 'Results',
        paragraphs: [
          `The results show that vog-related respiratory risk was not distributed randomly across Hawaiʻi. The KDE surface indicated the greatest relative exposure intensity near Kīlauea and across the southern portion of the Big Island, while lower modeled exposure occurred farther from the main emission source.`,
          `The tract-level risk analysis also revealed meaningful clustering. Local Moran's I identified high-high clusters in the southern Big Island, indicating tracts with high risk surrounded by similarly high-risk neighbors, while low-low clusters appeared near Honolulu. The Getis-Ord Gi* results supported this pattern by identifying statistically significant hot spots of elevated respiratory risk in the south and cold spots in lower-risk areas. The strongest visual evidence includes the KDE exposure map, the Gi* hot-spot map, and the Local Moran's I cluster map and scatterplot, because together they directly show where exposure is concentrated, where combined risk is highest, and how strongly those tracts cluster spatially.`,
        ],
      },
    ],
    figures: [
      [vogFig1, 'KDE surface of vog exposure intensity across the Hawaiian Island chain', 'Figure 1: Kernel density estimation (KDE) surface of vog exposure intensity across the Hawaiian Island chain, derived from monitoring station counts of hours above high-pollution thresholds using a 90 km search radius. Highest estimated exposure is concentrated near the Kīlauea eruption site on the southern Big Island.', true],
      [vogFig2, 'Getis-Ord Gi* hot-spot analysis of the composite Vog Risk Index by census tract', 'Figure 2: Getis-Ord Gi* hot-spot analysis of the composite Vog Risk Index by census tract, with statistical confidence levels of 90%, 95%, and 99%. Significant hot spots of elevated respiratory risk are concentrated along the southern Big Island; no significant hot spots are identified in other parts of the state.', true],
      [vogFig3, "Local Moran's I (LISA) cluster map of the Vog Risk Index", "Figure 3: Local Moran's I (LISA) cluster map of the Vog Risk Index by census tract across Hawaiʻi. High-high clusters are concentrated in the southern Big Island in proximity to Kīlauea, while low-low clusters appear near Honolulu. High-low and low-high outliers indicate tracts whose risk values diverge from their spatial neighbors."],
      [vogFig4, "Moran's scatterplot for the Local Moran's I analysis of the Vog Risk Index", "Figure 4: Moran's scatterplot for the Local Moran's I analysis of the Vog Risk Index, with z-transformed risk values on the x-axis and their spatial lag on the y-axis (R² = 0.31). Points in the upper-right and lower-left quadrants correspond to high-high and low-low clusters respectively; points in the remaining quadrants represent spatial outliers."],
    ],
  },
  {
    slug: 'brooks-range',
    title: 'Characterization of the Structural and Stratigraphic Relationships Across the Northern Boundary of the High-Pressure Terrane in the Brooks Range Orogen of Northern Alaska',
    listTitle: 'Structural & Stratigraphic Relationships Across the Brooks Range',
    subtitle: 'High-Pressure Terrane, Northern Alaska — Undergraduate Honors Research',
    meta: [
      ['Course', 'Undergraduate Senior Project (USP) — Honors Thesis'],
      ['Research Advisor', 'Dr. Jim Vogl'],
      ['Date', 'July 2025 – May 2026'],
    ],
    sections: [
      {
        title: 'Background',
        paragraphs: [
          `During the Early Cretaceous, the collision of a passive continental margin with an outboard island arc terrane produced the Brooks Range orogenic belt of northern Alaska. This collision formed a fold-thrust belt and, at deeper structural levels, two distinct metamorphic belts. The southernmost of these, the Schist Belt (SB), contains minerals consistent with blueschist and eclogite facies, recording high-pressure metamorphism during deep tectonic burial at approximately 25 to 30 km. Relict high-pressure phases including glaucophane and omphacitic pyroxene record a subduction-related metamorphic history, with polyphase structural fabrics indicating that the oldest deformation involved southward underthrusting of continental-margin material during the Late Jurassic to earliest Cretaceous. To the north, the Central Belt (CB) contains thrust-imbricated metasedimentary and metavolcanic rocks metamorphosed under lower-pressure greenschist facies conditions. Understanding the boundary between these two belts is essential for reconstructing the tectonic and metamorphic evolution of the range and for identifying the mechanisms by which the high-pressure rocks of the Schist Belt were exhumed to the surface.`,
          `In the Dalton Highway region, the sole road traversing the Brooks Range, the SB/CB boundary is commonly mapped as the north-dipping Hammond River shear zone (HRSZ). The exact location, orientation, and kinematics of the HRSZ are poorly constrained along much of its length, which limits the ability to test competing models for how the high-pressure rocks of the Schist Belt were exhumed. Two mechanisms have been proposed: exhumation by thrust faulting, in which overlying rock sheets were stacked and subsequently eroded, and exhumation by extensional faulting, in which crustal thinning allowed buried rocks to rise. Each mechanism predicts a distinct geometry and kinematics for the HRSZ, making precise structural characterization of the shear zone necessary. Additionally, no published detrital zircon age data exists for the rock units in the Dalton Highway area, leaving the depositional ages and stratigraphic relationships on either side of the boundary unconstrained. This project addresses that gap by characterizing the structural and stratigraphic relationships across the northern boundary of the high-pressure terrane west of the Dalton Highway.`,
        ],
      },
      {
        title: 'Data and Methods',
        paragraphs: [
          `The study area is located west of the Dalton Highway in the central Brooks Range, near the town of Wiseman and the drainages of Vermont Creek, Gold Creek, Smith Creek, and the Hammond River, crossing the mapped trace of the HRSZ. Geologic mapping was conducted from July 14 to August 6, 2025, totaling 22 days of active fieldwork. At each outcrop, structural measurements including foliation orientations, lineation directions, fold geometry, and kinematic indicators were recorded using a Brunton compass and logged in StraboSpot. A total of 107 rock samples were collected across all major units between the Schist Belt and the Central Belt.`,
          `Seven samples were selected for U-Pb detrital zircon geochronology spanning four rock units: the northern Schist Belt transition zone, the Midnight Dome unit, the HR Unit, and the Nugget Schist. All samples are quartzites, metasandstones, or quartz-rich schists suitable for detrital zircon analysis. Each was processed through jaw crushing, disc milling, magnetic separation, and heavy liquid separation using methylene iodide (MEI) to isolate zircon grains. Full mineral separation has been completed for all seven samples. The next step is handpicking zircon grains, mounting in epoxy, and isotopic analysis by LA-ICP-MS, targeting a minimum of 100 grains per sample (Gehrels, 2014). Maximum depositional ages will be calculated using the approaches of Dickinson and Gehrels (2009), and age spectra will be compared across units to address stratigraphic and provenance questions.`,
        ],
      },
      {
        title: 'Preliminary Results',
        paragraphs: [
          `Mapping documented a consistent north-to-south decrease in metamorphic grade. Along Wiseman Creek, Schist Belt rocks consist of calc-schists, quartz-mica schists, and calc-silicate rocks. The Midnight Dome unit to the north consists of quartzose schists and metasandstones with well-developed foliation. The HR Unit includes phyllites, graphitic phyllites, quartz-mica schists, and metasandstones, while the Nugget Schist is characterized by blue-gray albite-rich schist with porphyroblastic textures.`,
          `Foliations across most of the study area are gently dipping (6 to 30 degrees) with broadly east-west strikes. Crenulation folds overprinting an earlier foliation were documented at several localities, indicating at least two phases of deformation. The most significant structural finding is steep to near-vertical foliations (43 to 89 degrees) in the Wiseman Creek gorge, which stands in contrast to the rest of the area and likely reflects concentrated strain near the SB/CB boundary. Full mineral separation has been completed for all seven detrital zircon samples; U-Pb analysis by LA-ICP-MS awaits instrument availability.`,
        ],
      },
      {
        title: 'Conclusion and Future Work',
        paragraphs: [
          `Field mapping and mineral separation have been completed, providing a structural and lithologic framework for interpreting the HRSZ in the Dalton Highway region. The observed north-to-south decrease in metamorphic grade and evidence for at least two deformation phases align with regional interpretations. The zone of steep foliations in the Wiseman Creek gorge is a significant finding that may represent concentrated deformation at the SB/CB boundary.`,
          `The primary limitation at this stage is the absence of U-Pb isotopic age data due to the LA-ICP-MS instrument being non-functional. Once ages are obtained, they will be used to determine whether units on either side of the HRSZ share the same depositional history or derive from separate sedimentary basins, directly informing models for Schist Belt exhumation.`,
        ],
      },
    ],
    table: {
      caption: 'Table 1. Samples processed for detrital zircon U–Pb geochronology in this study.',
      headers: ['Sample', 'Unit', 'Locality', 'Rock Type', 'Coordinates (lat/lon)'],
      rows: [
        ['25BR03', 'SB (Northern)', 'Wiseman Creek', 'Calc-schist', '67.4202520°N, 150.1406040°W'],
        ['25BR31', 'HR Unit', 'Gold Creek', 'Block-weathering metasandstone', '67.5107541°N, 149.8125003°W'],
        ['25BR36', 'Midnight Dome', 'Smith Creek Dome', 'Quartzose schist', '67.4769045°N, 150.1804389°W'],
        ['25BR48', 'Midnight Dome', 'Smith Ck. Dome – Midnight Dome', 'Quartzose schist', '67.4865129°N, 150.1596195°W'],
        ['25BR66', 'Nugget Schist', 'Nugget Ridge', 'Quartzose schist', '67.4676018°N, 149.8426963°W'],
        ['25BR96', 'Midnight Dome', 'Midnight Dome', 'Meta-sandstone/quartzite', '67.4593986°N, 150.1690418°W'],
        ['25BR97', 'SB (Northern)', 'Wiseman Creek gorge', 'Quartzose schist', '67.4236791°N, 150.1413421°W'],
      ],
    },
    figures: [
      [brooksFig1, 'Shaded relief map of the study area west of the Dalton Highway, central Brooks Range, Alaska', 'Figure 1: Shaded relief map of the study area west of the Dalton Highway, central Brooks Range, Alaska. Green circles mark the six detrital zircon sample locations; structural measurements are shown by the symbols in the legend. Inset shows location within Alaska.', true],
    ],
    references: [
      'Dickinson, W. R., & Gehrels, G. E. (2009). Use of U-Pb ages of detrital zircons to infer maximum depositional ages of strata: A test against a Colorado Plateau Mesozoic database. Earth and Planetary Science Letters, 288(1–2), 115–125.',
      'Gehrels, G. (2014). Detrital zircon U-Pb geochronology applied to tectonics. Annual Review of Earth and Planetary Sciences, 42(1), 127–149.',
      'Hoiland, C. W., Miller, E. L., & Pease, V. (2018). Greenschist facies metamorphic zircon overgrowths as a constraint on exhumation of the Brooks Range Metamorphic Core, Alaska. Tectonics, 37(10), 3429–3455.',
      'Till, A. B., Dumoulin, J. A., Harris, A. G., Moore, T. E., Bleick, H. A., & Siwiec, B. R. (2008). Bedrock geologic map of the southern Brooks Range, Alaska, and accompanying conodont data. USGS Open-File Report 2008-1149.',
    ],
  },
  {
    slug: 'kilauea-hydrology',
    title: 'Impacts of Volcanism on Hydrological Systems: Rainfall Anomalies, Ash Leachate Chemistry, and Spatial Patterns of Water-Quality Change During the 2018 Kīlauea Eruption',
    listTitle: 'Impacts of Volcanism on Hydrological Systems',
    subtitle: 'Rainfall Anomalies & Water-Quality Change During the 2018 Kīlauea Eruption',
    meta: [
      ['Course', 'GEO3280 — Principles of Geographic Hydrology'],
      ['Instructor', 'Dr. Johanna Engström'],
      ['Date', 'Fall 2025'],
    ],
    sections: [
      {
        title: 'Background',
        paragraphs: [
          `Kīlauea is one of the most active volcanoes on Earth, located on the Big Island of Hawaiʻi and sustained by a Pacific hotspot. In 2018, volcanic activity migrated from the summit and upper rift zone to the Lower East Rift Zone (LERZ), producing fissure eruptions and extensive lava flows that destroyed structures and fundamentally altered the surrounding landscape. Significant ash and gas emissions accompanied these events, generating harmful environmental impacts across the island. The eruptive period began in May 2018 and continued with continuous lava flow through September 2018.`,
          `This project investigates the intersection of volcanic activity and hydrology during that period, focusing on how anomalously elevated precipitation interacted with volcanic emissions and ash fallout to alter both atmospheric and surface-water chemistry across Kīlauea and its surrounding watersheds. This project was organized around three central research questions: first, whether rainfall over Kīlauea was anomalously high before and during the 2018 eruption; second, whether that rainfall reacted with ash fallout to influence rainwater and catchment chemistry; and third, whether spatial patterns in pollutants and acidity relative to the eruption and surrounding watersheds could be identified.`,
        ],
      },
      {
        title: 'Data and Materials',
        paragraphs: [
          `Five primary data sources were used in this analysis. Precipitation data came from Daymet V4, which provided gridded monthly rainfall at 1-kilometer resolution over the Hawaii domain; January through April totals were extracted for both a historical baseline period (2000–2006) and the eruption year (2018) to support the anomaly calculation. Water chemistry data came from two USGS sources: a full physical-chemical water-quality dataset covering the entire island, with coordinates and collection dates that allowed samples to be classified as Pre-Eruption, During-Eruption, or Post-Eruption; and a dedicated 2018 Kīlauea field dataset comprising two CSV files, one for ash leachate analyses and one for catchment and rainwater analyses, collected in close proximity to active fissures during the eruption itself.`,
          `Spatial context for the eruption was provided by USGS geospatial eruption data, specifically the 2018 LERZ lava flow footprint and mapped fissure locations, which served as reference layers throughout the analysis. Stream and watershed shapefiles from the State of Hawaiʻi Office of Planning and Sustainable Development were used to define hydrological boundaries for the catchment-level component of the study.`,
        ],
      },
      {
        title: 'Methods',
        paragraphs: [
          `Precipitation data from Daymet V4 were used to compute a rainfall anomaly by comparing January–April totals for 2018 against the multi-year baseline period (2000–2006). This comparison allowed identification of whether conditions in the months immediately preceding and overlapping with the eruption were wetter than normal across the Kīlauea region.`,
          `USGS water-quality sample locations were geocoded using their coordinate fields and classified temporally into Pre-Eruption, During-Eruption, and Post-Eruption periods based on collection dates. Water chemistry variables, including pH and concentrations of volatile and potentially toxic elements such as selenium (Se), sulfur (S), and arsenic (As), were then mapped spatially to identify patterns related to eruption fissures, lava flows, and watershed boundaries.`,
          `Ash leachate and catchment/rainwater chemistry data from the USGS field campaign were incorporated to supplement the fixed-station water-quality record. Because these samples were collected much closer to the active fissures, they provided a higher-resolution view of pollutant concentrations near the source of contamination. Catchment effects were evaluated by overlaying sample locations against watershed shapefiles and the LERZ lava footprint to understand how volcanic inputs moved through the hydrological system.`,
        ],
      },
      {
        title: 'Results',
        paragraphs: [
          `The months leading up to the 2018 Kīlauea eruption were characterized by above-average precipitation over the volcano, and this anomalously elevated rainfall continued for the duration of the eruptive period. This finding carried consequences across three environmental systems.`,
          `In the atmosphere, rainfall mixed with the large volumes of sulfur dioxide (SO₂) released by the eruption; SO₂ oxidized in the presence of water to form sulfuric acid, generating acid rain and sulfate aerosols collectively known as vog (volcanic smog) that spread across the island. At the surface, ashfall deposits released leachates when wetted, introducing volatile and potentially toxic elements, including selenium (Se), sulfur (S), and arsenic (As), into streams and catchments while simultaneously lowering pH and increasing turbidity. The elevated moisture conditions also had mechanical implications, as wet rock is generally weaker than dry rock, which may have influenced the behavior of volcanic materials during the eruptive period.`,
          `The Pre/During/Post-Eruption spatial analysis of water-quality monitoring data revealed discernible changes in pollutant concentrations and acidity across time periods, with the most pronounced chemical signatures appearing in areas downslope of active fissures and within catchments intersecting the LERZ lava footprint. Catchment-level mapping further demonstrated how volcanic inputs were transmitted through the island's hydrological network, with affected streams showing elevated pollutant signatures during and shortly after the eruptive period.`,
        ],
      },
    ],
    figures: [
      [impactFig1, 'Map of abnormal rainfall on the Big Island of Hawaii along with tephra and magma extent from the 2018 Kīlauea eruption', 'Figure 1: Map of abnormal rainfall on the Big Island of Hawaii along with the extent of tephra and magma from the 2018 Kīlauea eruption.', true],
      [impactFig2a, 'Pollution recorded before the 2018 Kīlauea eruption', 'Figure 2a: Map of pollution recorded before the 2018 Kīlauea eruption from USGS monitoring stations across the inhabited islands of Hawaii, including the extent of the magma released.'],
      [impactFig2b, 'Pollution recorded during the 2018 Kīlauea eruption', 'Figure 2b: Map of pollution recorded during the 2018 Kīlauea eruption from USGS monitoring stations across the inhabited islands of Hawaii, including the extent of the magma released.'],
      [impactFig2c, 'Pollution recorded post-eruption', 'Figure 2c: Map of pollution recorded post-eruption from USGS monitoring stations across the inhabited islands of Hawaii, including the extent of the magma released.'],
      [impactFig3, 'Map of eruption and tephra extent and local marine habitat', 'Figure 3: Map of eruption and tephra extent and local marine habitat to highlight potential direct ecological effects of the eruption.', true],
    ],
  },
]

function getRoute() {
  const hash = window.location.hash
  if (!hash || hash === '#/' || hash === '#') return { page: 'home' }
  if (hash === '#/resume') return { page: 'resume' }
  if (hash.startsWith('#/')) return { page: 'project', slug: hash.slice(2) }
  return { page: 'home', anchor: hash.slice(1) }
}

function App() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    document.title =
      route.page === 'resume'
        ? 'Cody Hunter | Resume/CV'
        : route.page === 'project'
          ? `${projects.find((project) => project.slug === route.slug)?.listTitle ?? 'Project'} | Cody Hunter`
          : 'Cody Hunter | Geology & Geography E-Portfolio'

    if (route.anchor) {
      requestAnimationFrame(() => document.getElementById(route.anchor)?.scrollIntoView())
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [route])

  const project = route.page === 'project' ? projects.find((item) => item.slug === route.slug) : null

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#2f2a24]">
      <Header />
      <main>
        {route.page === 'resume' ? <ResumePage /> : project ? <ProjectPage project={project} /> : <HomePage />}
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className={`border-b ${border} bg-white`}>
      <div className={`${container} flex flex-col gap-4 py-[18px] sm:flex-row sm:items-center sm:justify-between`}>
        <a href="#/" className="no-underline">
          <div className="font-bold text-[#2f2a24]">Cody Hunter</div>
          <div className={`text-[0.9rem] ${muted}`}>Geology & Geography • University of Florida</div>
        </a>

        <nav aria-label="Primary navigation">
          <ul className={`m-0 flex list-none flex-wrap gap-x-5 gap-y-2 p-0 ${muted}`}>
            <li><a className="hover:text-[#3f5a3f]" href="#about">About</a></li>
            <li><a className="hover:text-[#3f5a3f]" href="#projects">Projects</a></li>
            <li><a className="hover:text-[#3f5a3f]" href="#contact">Contact</a></li>
            <li><a className="hover:text-[#3f5a3f]" href="#/resume">Resume/CV</a></li>
            <li><a className="hover:text-[#3f5a3f]" href={portfolioPdf} target="_blank" rel="noreferrer">Portfolio</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

function HomePage() {
  return (
    <>
      <section className="h-[340px] overflow-hidden">
        <img className="block h-full w-full object-cover" src={pano} alt="Mountain panorama" />
      </section>

      <section className={`${container} pt-[60px] pb-[30px] text-center`}>
        <h1 className="mb-2.5 text-[2rem] font-bold">Geology & Geography Portfolio</h1>
        <p className={`mx-auto mb-5 max-w-[600px] ${muted}`}>
          I&apos;m a Geology & Geography double major at the University of Florida focused on GIS analysis,
          remote sensing, hazards, and structural/stratigraphic research.
        </p>
        <a className="inline-block rounded bg-[#3f5a3f] px-[18px] py-2.5 text-white no-underline" href="#projects">
          View Projects
        </a>
      </section>

      <section id="about" className={section}>
        <h2 className="mb-2.5 text-2xl font-bold">About</h2>
        <p>
          My work brings together geologic understanding and spatial analysis to support decision-making across hazards,
          environmental health, and resource systems. I&apos;m particularly interested in field-focused research enabled by GIS
          and reproducible workflows. Moreover, I have a interest in igneous petrology and volcanology with hope to enter
          grad-school studying these topics.
        </p>

        <div className="mt-3">
          {['ArcGIS Pro', 'Remote Sensing', 'Spatial Statistics', 'Machine Learning', 'Geologic Mapping', 'Lab/LA-ICP-MS Experience'].map((tag) => (
            <span className="mt-1.5 mr-2 inline-block rounded bg-[#e7e1d6] px-2.5 py-1.5 text-[0.85rem]" key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      <section id="projects" className={section}>
        <h2 className="mb-5 text-[1.8rem] font-bold">Selected Projects</h2>
        <div className="flex flex-col gap-5">
          {projects.map((project) => (
            <a
              className={`${card} border-l-[6px] border-l-[#3f5a3f] p-7 text-[1.3rem] font-semibold text-[#2f2a24] no-underline transition hover:-translate-y-1 hover:bg-[#ece6db]`}
              href={`#/${project.slug}`}
              key={project.slug}
            >
              {project.listTitle}
              <span className={`mt-1.5 block text-base font-normal ${muted}`}>{project.subtitle}</span>
            </a>
          ))}
        </div>
      </section>

      <section className={section}>
        <h2 className="mb-2.5 text-2xl font-bold">Field Photos</h2>
        <p className={`mt-[-4px] mb-5 text-base tracking-[0.04em] ${muted}`}>Brooks Range, Alaska (2025)</p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[15px]">
          <img className="w-full rounded-lg" src={seated} alt="Overlook view" />
          <img className="w-full rounded-lg" src={rockyStream} alt="Rocky stream" />
          <img className="w-full rounded-lg" src={hiking} alt="Mountain hiking scene" />
        </div>
      </section>
    </>
  )
}

function ResumePage() {
  return (
    <div className={section}>
      <BackLink />
      <div className={`mb-[30px] border-b ${border} pt-[50px] pb-[30px] text-center`}>
        <h1 className="mb-1.5 text-[2rem] font-bold">Cody Hunter</h1>
        <p className={`text-[0.9rem] ${muted}`}>
          3920 SW 21st St, Gainesville, FL 32608 &nbsp;|&nbsp; (817) 312-9549 &nbsp;|&nbsp;
          <a className={accent} href="mailto:codyhunter@ufl.edu">codyhunter@ufl.edu</a>
        </p>
        <div className="mt-[18px]">
          <a className="inline-block rounded bg-[#3f5a3f] px-[18px] py-2.5 text-white no-underline" href={resumePdf} target="_blank" rel="noreferrer">
            Download PDF
          </a>
        </div>
      </div>

      <ResumeSection title="Education">
        <Entry
          title="Bachelor of Science in Geology and Geography"
          date="January 2023 – Present"
          sub="University of Florida College of Liberal Arts and Sciences — Gainesville, FL"
          bullets={[
            'Proposed and conducted field research collecting detrital zircons for U-Pb geochronology of the Alaskan Brooks Range. Title: "Characterization of the structural and stratigraphic relationships across the northern boundary of the high-pressure terrane in the Brooks Range orogen of northern Alaska" (Project ongoing)',
            'University Scholars Program — Awarded funding and platform to present research at symposium and in UF Journal of Undergraduate Research.',
          ]}
        />
        <Entry title="Associate of Arts" date="December 2023" sub="Santa Fe College — Gainesville, FL" />
        <Entry
          title="Undergraduate Certificate — GeoAI: Geographic Artificial Intelligence and Big Data"
          date="January 2023 – Present"
          sub="University of Florida — Gainesville, FL"
          bullets={['Developed transferable skills applying AI to geospatial challenges, addressing environmental and societal issues.']}
        />
      </ResumeSection>

      <ResumeSection title="Skills">
        <SkillRow label="Management" text="Project management, proposal writing, research methodology, oral and written communication" />
        <SkillRow label="Technical" text="Data collection, data management, spatial analysis (ArcGIS Pro), remote sensing (GEE), statistical analysis (SPSS, GeoDa, R, Excel), mass spectrometry analysis" />
        <SkillRow label="Fieldwork" text="Geological mapping, lithostratigraphic correlation & logging" />
      </ResumeSection>

      <ResumeSection title="Research Interests">
        <p className="text-[0.95rem] leading-[1.7]">
          Volcanology and Igneous Petrology, structures and processes of mantle plumes, mantle sources of plume magmatism,
          plume generation, magma dynamics, eruption forecasting, eruption indicators, volcanic hazards, GIS-based volcanic
          hazard mapping and monitoring.
        </p>
      </ResumeSection>

      <ResumeSection title="Experience">
        <Entry
          title="President, Beta Psi Chapter of Sigma Gamma Epsilon"
          date="August 2025 – Present"
          sub="University of Florida — Gainesville, FL"
          bullets={[
            'Serve as the chief executive officer of the chapter; preside over meetings and guide chapter activities in alignment with the mission of Sigma Gamma Epsilon.',
            'Oversee officer roles (Vice President, Secretary, Treasurer) and delegate responsibilities to ensure efficient chapter operation.',
            'Encourage scholarly activities, support student research dissemination, and connect members with professional opportunities in geology and geography.',
            'Prepare agendas, lead chapter meetings, and ensure parliamentary procedures and chapter bylaws are followed.',
          ]}
        />
        <Entry
          title="Toxicology Lab Aquaculturist"
          date="October 2023 – October 2024"
          sub="EcoAnalysts — Alachua, FL"
          bullets={[
            'Maintained and monitored aquatic organisms for use in environmental toxin tests.',
            'Operated and maintained laboratory aquaculture systems, instrumentation, and life support equipment.',
            'Monitored and recorded data, including water quality parameters and organism responses, supporting optimal organism production and health.',
            'Ensured compliance with laboratory safety protocols and ethical standards for animal care.',
          ]}
        />
      </ResumeSection>
    </div>
  )
}

function ProjectPage({ project }) {
  return (
    <div className={section}>
      <BackLink />

      <div className={`mb-9 border-b ${border} pt-[50px] pb-[30px]`}>
        <h1 className="mb-3.5 text-[1.8rem] font-bold leading-[1.35]">{project.title}</h1>
        <div className={`flex flex-col gap-[3px] text-[0.9rem] leading-[1.7] ${muted}`}>
          {project.meta.map(([label, value]) => (
            <div key={label}><strong className="text-[#2f2a24]">{label}:</strong> {value}</div>
          ))}
        </div>
      </div>

      {project.sections.map((item) => <ProjectSection sectionData={item} key={item.title} />)}
      {project.table ? <SampleTable table={project.table} /> : null}
      <FigureGrid figures={project.figures} />
      {project.references ? <References references={project.references} /> : null}
    </div>
  )
}

function ProjectSection({ sectionData }) {
  return (
    <section className="mb-11">
      <SectionHeading>{sectionData.title}</SectionHeading>
      {sectionData.paragraphs.map((paragraph) => (
        <p className="mb-3 text-[0.95rem] leading-[1.8]" key={paragraph}>{paragraph}</p>
      ))}
      {sectionData.formulas ? (
        <div className="my-4 flex flex-wrap gap-6">
          {sectionData.formulas.map(([formula, label]) => (
            <div className="min-w-[220px] flex-1" key={formula}>
              <div className="inline-block rounded bg-[#2f2a24] px-[22px] py-3 font-serif text-[1.05rem] italic tracking-[0.02em] text-[#f4f1ea]">{formula}</div>
              <p className={`mt-2 text-[0.83rem] italic leading-[1.5] ${muted}`}>{label}</p>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  )
}

function FigureGrid({ figures }) {
  return (
    <section className="mb-11">
      <SectionHeading>Figures</SectionHeading>
      <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
        {figures.map(([src, alt, caption, fullWidth]) => (
          <figure className={`${card} p-4 ${fullWidth ? 'col-span-full' : ''}`} key={src}>
            <img className="mb-2.5 block w-full rounded" src={src} alt={alt} />
            <figcaption className={`m-0 text-[0.82rem] italic leading-[1.55] ${muted}`}>{caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

function SampleTable({ table }) {
  return (
    <section className="mb-11">
      <SectionHeading>Sample Table</SectionHeading>
      <div className="overflow-x-auto">
        <table className="mt-3.5 w-full border-collapse text-[0.86rem]">
          <thead>
            <tr>
              {table.headers.map((header) => (
                <th className="whitespace-nowrap bg-[#3f5a3f] px-3 py-[9px] text-left text-[0.83rem] font-semibold text-white" key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr className="even:bg-[#faf8f4]" key={row.join('-')}>
                {row.map((cell) => (
                  <td className={`border-b ${border} px-3 py-2 align-top`} key={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={`mt-2 text-[0.82rem] ${muted}`}>{table.caption}</p>
    </section>
  )
}

function References({ references }) {
  return (
    <section className="mb-11">
      <SectionHeading>References</SectionHeading>
      <div>
        {references.map((reference) => (
          <p className={`mb-2.5 pl-6 text-[0.87rem] leading-[1.75] [text-indent:-24px] ${muted}`} key={reference}>{reference}</p>
        ))}
      </div>
    </section>
  )
}

function ResumeSection({ title, children }) {
  return (
    <section className="mb-12">
      <SectionHeading variant="resume">{title}</SectionHeading>
      {children}
    </section>
  )
}

function SectionHeading({ children, variant = 'project' }) {
  const size = variant === 'resume' ? 'mb-[22px] text-[1.2rem]' : 'mb-[18px] text-[1.1rem]'

  return (
    <h2 className={`${size} border-b-2 border-[#3f5a3f] pb-1.5 font-bold uppercase tracking-[0.08em] ${accent}`}>
      {children}
    </h2>
  )
}

function Entry({ title, date, sub, bullets = [] }) {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap items-baseline justify-between gap-1">
        <span className="text-base font-bold">{title}</span>
        <span className={`whitespace-nowrap text-[0.875rem] ${muted}`}>{date}</span>
      </div>
      <div className={`mt-0.5 mb-2 text-[0.9rem] ${muted}`}>{sub}</div>
      {bullets.length ? (
        <ul className="mt-2 list-disc pl-5">
          {bullets.map((bullet) => <li className="mb-[5px] text-[0.95rem]" key={bullet}>{bullet}</li>)}
        </ul>
      ) : null}
    </div>
  )
}

function SkillRow({ label, text }) {
  return <div className="mb-2 text-[0.95rem]"><strong>{label}:</strong> {text}</div>
}

function BackLink() {
  return <a className={`mb-2.5 inline-block text-[0.9rem] no-underline hover:text-[#3f5a3f] ${muted}`} href="#/">← Back to Portfolio</a>
}

function Footer() {
  return (
    <footer id="contact" className={`border-t ${border} bg-white py-[30px] text-[0.9rem]`}>
      <div className={`${container} flex flex-wrap justify-between gap-2.5`}>
        <div>
          <strong>Cody Hunter</strong><br />
          Geology & Geography — University of Florida
        </div>
        <div>
          University Email: <a className={accent} href="mailto:codyhunter@ufl.edu">codyhunter@ufl.edu</a>
          <br />
          Personal Email: <a className={accent} href="mailto:cody.hunter03@hotmail.com">cody.hunter03@hotmail.com</a>
        </div>
      </div>
    </footer>
  )
}

export default App
