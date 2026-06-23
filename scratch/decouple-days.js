import fs from 'fs';
import path from 'path';

const docsDir = path.join(process.cwd(), 'public', 'docs');
const sequencePath = path.join(docsDir, 'sequence.json');

// Ordered list of original files in their current correct sequence
const originalSequence = [
  "day1_day_1_course_introduction_ai_revolution.md",
  "day2_day_2_introduction_to_computers_ai_hardware.md",
  "day3_day_3_internet_basics_apis.md",
  "day4_day_4_sdlc_product_thinking_business_problems.md",
  "day5_day_5_introduction_to_hld_components.md",
  "day6_day_6_hld_mindset_building.md",
  "day7_day_7_data_exchange_api_architectures.md",
  "day8_day_8_hld_problem_solving_prerequisites.md",
  "day9_day_9_schema_design_sql_databases.md",
  "day10_day_10_cache_systems_messaging_baselines.md",
  "day11_day_11_scaling_load_balancer_cdn_cap_paelc.md",
  "day12_day_12_database_replication_models.md",
  "day13_day_13_database_partitioning_routing.md",
  "day14_day_14_distributed_transactions_in_hld.md",
  "day15_day_15_hld_revision_problem_prerequisites.md",
  "day16_day_16_designing_whatsapp_part_1.md",
  "day17_day_17_designing_whatsapp_part_2.md",
  "day18_day_18_designing_youtube_part_1.md",
  "day19_day_19_designing_youtube_part_2.md",
  "day20_day_20_designing_uber_ola_ride_hailing_part_1.md",
  "day21_day_21_designing_uber_ola_ride_hailing_part_2.md",
  "day22_day_22_designing_amazon_aws_s3_storage.md"
];

const cleanSequence = [];

console.log('🔄 Decoupling day numbers from filenames and content...');

originalSequence.forEach(file => {
  const oldPath = path.join(docsDir, file);
  if (!fs.existsSync(oldPath)) {
    console.log(`⚠️ Warning: file ${file} does not exist.`);
    return;
  }

  // Extract day number N and clean name
  const match = file.match(/^day\d+_day_\d+_(.+)\.md$/);
  if (!match) {
    console.log(`⚠️ File doesn't match format: ${file}`);
    return;
  }

  const cleanName = `${match[1]}.md`;
  const newPath = path.join(docsDir, cleanName);
  cleanSequence.push(cleanName);

  let content = fs.readFileSync(oldPath, 'utf-8');

  // Strip "Day X - " prefix from frontmatter title:
  // e.g. title: "Day 5 - Intro" -> title: "Intro"
  content = content.replace(/title:\s*["']Day\s*\d+\s*-\s*([^"']+)["']/i, 'title: "$1"');
  
  // Strip "Day X - " from main markdown heading:
  // e.g. # Day 5 - Intro -> # Intro
  // e.g. ## Day 5 - Intro -> ## Intro
  content = content.replace(/^(#+)\s*Day\s*\d+\s*-\s*(.+)$/im, '$1 $2');

  // Write content to new clean file and delete old file
  fs.writeFileSync(newPath, content, 'utf-8');
  fs.unlinkSync(oldPath);

  console.log(`- Decoupled: ${file} -> ${cleanName}`);
});

// Write sequence.json
fs.writeFileSync(sequencePath, JSON.stringify(cleanSequence, null, 2), 'utf-8');
console.log(`🎉 Created sequence.json with ${cleanSequence.length} entries.`);
